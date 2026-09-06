from datetime import datetime, timezone
import json
import os
from pathlib import Path

from scholarly import scholarly


def main() -> None:
    scholar_id = os.environ.get("GOOGLE_SCHOLAR_ID")
    if not scholar_id:
        raise RuntimeError("GOOGLE_SCHOLAR_ID is not configured")

    author = scholarly.search_author_id(scholar_id)
    scholarly.fill(author, sections=["basics", "indices", "counts", "publications"])

    publications = {}
    for item in author.get("publications", []):
        bib = item.get("bib", {}) or {}
        publication_id = item.get("author_pub_id") or bib.get("title")
        if publication_id:
            publications[publication_id] = {
                "title": bib.get("title"),
                "num_citations": item.get("num_citations"),
            }

    payload = {
        "status": "ok",
        "updatedAt": datetime.now(timezone.utc).isoformat(),
        "citedby": author.get("citedby"),
        "hindex": author.get("hindex"),
        "i10index": author.get("i10index"),
        "publications": publications,
    }

    output_path = Path(__file__).parent / "results" / "scholar.json"
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {output_path}")


if __name__ == "__main__":
    main()
