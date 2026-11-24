"""Downloads the MediaPipe pose-landmarker model (~6 MB) used by the body scanner."""
import sys
import urllib.request
from pathlib import Path

URL = ("https://storage.googleapis.com/mediapipe-models/pose_landmarker/"
       "pose_landmarker_lite/float16/latest/pose_landmarker_lite.task")
DEST = Path(__file__).resolve().parent / "models" / "pose_landmarker_lite.task"


def main():
    DEST.parent.mkdir(parents=True, exist_ok=True)
    if DEST.exists() and DEST.stat().st_size > 1_000_000:
        print("Pose model already present.")
        return 0
    print("Downloading pose model ...")
    try:
        urllib.request.urlretrieve(URL, DEST)
    except Exception as e:
        print(f"Could not download the pose model ({e}).")
        print("The app still works using its built-in OpenCV scanner (a bit less accurate).")
        print(f"To enable the better scanner, download:\n  {URL}\nand save it as:\n  {DEST}")
        return 1
    print("Saved", DEST)
    return 0


if __name__ == "__main__":
    sys.exit(main())
