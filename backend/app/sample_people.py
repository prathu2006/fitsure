"""The team's 20 reference people (ages 6-74, all body shapes). Values in cm."""
SAMPLE_PEOPLE = [
    # id, sex, age, body type, height, bust/chest, waist, hip, arm
    (1, "F", 6, "Thin", 114, 55, 51, 58, 16),
    (2, "M", 8, "Healthy", 128, 63, 57, 66, 18),
    (3, "F", 11, "Healthy", 142, 68, 59, 77, 19),
    (4, "M", 13, "Thin", 155, 70, 60, 74, 20),
    (5, "F", 16, "Thin", 163, 79, 61, 87, 22),
    (6, "M", 17, "Healthy", 175, 90, 75, 92, 28),
    (7, "M", 21, "Fat", 172, 108, 98, 108, 34),
    (8, "F", 23, "Healthy", 165, 88, 70, 96, 26),
    (9, "M", 27, "Thin", 180, 87, 72, 87, 26),
    (10, "F", 29, "Fat", 160, 108, 94, 117, 36),
    (11, "M", 33, "Healthy", 177, 98, 82, 98, 32),
    (12, "F", 35, "Thin", 168, 82, 64, 89, 23),
    (13, "M", 40, "Fat", 173, 118, 108, 112, 38),
    (14, "F", 42, "Healthy", 162, 94, 78, 102, 29),
    (15, "M", 48, "Healthy", 170, 100, 86, 99, 31),
    (16, "F", 50, "Fat", 158, 112, 100, 120, 38),
    (17, "M", 58, "Thin", 168, 90, 78, 90, 26),
    (18, "F", 61, "Healthy", 156, 96, 82, 102, 30),
    (19, "M", 70, "Fat", 165, 112, 104, 108, 33),
    (20, "F", 74, "Thin", 150, 84, 72, 88, 23),
]

KEYS = ("id", "sex", "age", "body_type", "height", "bust", "waist", "hip", "arm")


def people():
    return [dict(zip(KEYS, p)) for p in SAMPLE_PEOPLE]
