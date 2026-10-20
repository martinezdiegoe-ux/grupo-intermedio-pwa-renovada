/* Plan anual extraído del PDF suministrado. Orden y pasajes del documento. */
(function () {
  'use strict';
  const days = [
  {
    "day": 1,
    "month": 1,
    "date": 1,
    "sourceReference": "Lucas 5.27-39 / Génesis 1-2 / Salmos 1",
    "readings": [
      {
        "reference": "Lucas 5:27–39",
        "book": 42,
        "chapter": 5,
        "endChapter": 5
      },
      {
        "reference": "Génesis 1–2",
        "book": 1,
        "chapter": 1,
        "endChapter": 2
      },
      {
        "reference": "Salmos 1",
        "book": 19,
        "chapter": 1,
        "endChapter": 1
      }
    ],
    "passage": "Lucas 5:27–39 · Génesis 1–2 · Salmos 1",
    "theme": "1 de enero"
  },
  {
    "day": 2,
    "month": 1,
    "date": 2,
    "sourceReference": "Lucas 6.1-26 / Génesis 3-5 / Salmos 2",
    "readings": [
      {
        "reference": "Lucas 6:1–26",
        "book": 42,
        "chapter": 6,
        "endChapter": 6
      },
      {
        "reference": "Génesis 3–5",
        "book": 1,
        "chapter": 3,
        "endChapter": 5
      },
      {
        "reference": "Salmos 2",
        "book": 19,
        "chapter": 2,
        "endChapter": 2
      }
    ],
    "passage": "Lucas 6:1–26 · Génesis 3–5 · Salmos 2",
    "theme": "2 de enero"
  },
  {
    "day": 3,
    "month": 1,
    "date": 3,
    "sourceReference": "Lucas 6.27-49 / Génesis 6-7 / Salmos 3",
    "readings": [
      {
        "reference": "Lucas 6:27–49",
        "book": 42,
        "chapter": 6,
        "endChapter": 6
      },
      {
        "reference": "Génesis 6–7",
        "book": 1,
        "chapter": 6,
        "endChapter": 7
      },
      {
        "reference": "Salmos 3",
        "book": 19,
        "chapter": 3,
        "endChapter": 3
      }
    ],
    "passage": "Lucas 6:27–49 · Génesis 6–7 · Salmos 3",
    "theme": "3 de enero"
  },
  {
    "day": 4,
    "month": 1,
    "date": 4,
    "sourceReference": "Lucas 7.1-17 / Génesis 8-10 / Salmos 4",
    "readings": [
      {
        "reference": "Lucas 7:1–17",
        "book": 42,
        "chapter": 7,
        "endChapter": 7
      },
      {
        "reference": "Génesis 8–10",
        "book": 1,
        "chapter": 8,
        "endChapter": 10
      },
      {
        "reference": "Salmos 4",
        "book": 19,
        "chapter": 4,
        "endChapter": 4
      }
    ],
    "passage": "Lucas 7:1–17 · Génesis 8–10 · Salmos 4",
    "theme": "4 de enero"
  },
  {
    "day": 5,
    "month": 1,
    "date": 5,
    "sourceReference": "Lucas 7.18-50 / Génesis 11 / Salmos 5",
    "readings": [
      {
        "reference": "Lucas 7:18–50",
        "book": 42,
        "chapter": 7,
        "endChapter": 7
      },
      {
        "reference": "Génesis 11",
        "book": 1,
        "chapter": 11,
        "endChapter": 11
      },
      {
        "reference": "Salmos 5",
        "book": 19,
        "chapter": 5,
        "endChapter": 5
      }
    ],
    "passage": "Lucas 7:18–50 · Génesis 11 · Salmos 5",
    "theme": "5 de enero"
  },
  {
    "day": 6,
    "month": 1,
    "date": 6,
    "sourceReference": "Lucas 8.1-25 / Génesis 12 / Salmos 6",
    "readings": [
      {
        "reference": "Lucas 8:1–25",
        "book": 42,
        "chapter": 8,
        "endChapter": 8
      },
      {
        "reference": "Génesis 12",
        "book": 1,
        "chapter": 12,
        "endChapter": 12
      },
      {
        "reference": "Salmos 6",
        "book": 19,
        "chapter": 6,
        "endChapter": 6
      }
    ],
    "passage": "Lucas 8:1–25 · Génesis 12 · Salmos 6",
    "theme": "6 de enero"
  },
  {
    "day": 7,
    "month": 1,
    "date": 7,
    "sourceReference": "Lucas 8.26-56 / Génesis 13-14 / Salmos 7",
    "readings": [
      {
        "reference": "Lucas 8:26–56",
        "book": 42,
        "chapter": 8,
        "endChapter": 8
      },
      {
        "reference": "Génesis 13–14",
        "book": 1,
        "chapter": 13,
        "endChapter": 14
      },
      {
        "reference": "Salmos 7",
        "book": 19,
        "chapter": 7,
        "endChapter": 7
      }
    ],
    "passage": "Lucas 8:26–56 · Génesis 13–14 · Salmos 7",
    "theme": "7 de enero"
  },
  {
    "day": 8,
    "month": 1,
    "date": 8,
    "sourceReference": "Lucas 9.1-27 / Génesis 15 / Salmos 8",
    "readings": [
      {
        "reference": "Lucas 9:1–27",
        "book": 42,
        "chapter": 9,
        "endChapter": 9
      },
      {
        "reference": "Génesis 15",
        "book": 1,
        "chapter": 15,
        "endChapter": 15
      },
      {
        "reference": "Salmos 8",
        "book": 19,
        "chapter": 8,
        "endChapter": 8
      }
    ],
    "passage": "Lucas 9:1–27 · Génesis 15 · Salmos 8",
    "theme": "8 de enero"
  },
  {
    "day": 9,
    "month": 1,
    "date": 9,
    "sourceReference": "Lucas 9.28-62 / Génesis 16 / Salmos 9",
    "readings": [
      {
        "reference": "Lucas 9:28–62",
        "book": 42,
        "chapter": 9,
        "endChapter": 9
      },
      {
        "reference": "Génesis 16",
        "book": 1,
        "chapter": 16,
        "endChapter": 16
      },
      {
        "reference": "Salmos 9",
        "book": 19,
        "chapter": 9,
        "endChapter": 9
      }
    ],
    "passage": "Lucas 9:28–62 · Génesis 16 · Salmos 9",
    "theme": "9 de enero"
  },
  {
    "day": 10,
    "month": 1,
    "date": 10,
    "sourceReference": "Lucas 10.1-20 /Génesis 17 / Salmos 10",
    "readings": [
      {
        "reference": "Lucas 10:1–20",
        "book": 42,
        "chapter": 10,
        "endChapter": 10
      },
      {
        "reference": "Génesis 17",
        "book": 1,
        "chapter": 17,
        "endChapter": 17
      },
      {
        "reference": "Salmos 10",
        "book": 19,
        "chapter": 10,
        "endChapter": 10
      }
    ],
    "passage": "Lucas 10:1–20 · Génesis 17 · Salmos 10",
    "theme": "10 de enero"
  },
  {
    "day": 11,
    "month": 1,
    "date": 11,
    "sourceReference": "Lucas 10.21-42 / Génesis 18 / Salmos 11",
    "readings": [
      {
        "reference": "Lucas 10:21–42",
        "book": 42,
        "chapter": 10,
        "endChapter": 10
      },
      {
        "reference": "Génesis 18",
        "book": 1,
        "chapter": 18,
        "endChapter": 18
      },
      {
        "reference": "Salmos 11",
        "book": 19,
        "chapter": 11,
        "endChapter": 11
      }
    ],
    "passage": "Lucas 10:21–42 · Génesis 18 · Salmos 11",
    "theme": "11 de enero"
  },
  {
    "day": 12,
    "month": 1,
    "date": 12,
    "sourceReference": "Lucas 11.1-28 / Génesis 19 / Salmos 12",
    "readings": [
      {
        "reference": "Lucas 11:1–28",
        "book": 42,
        "chapter": 11,
        "endChapter": 11
      },
      {
        "reference": "Génesis 19",
        "book": 1,
        "chapter": 19,
        "endChapter": 19
      },
      {
        "reference": "Salmos 12",
        "book": 19,
        "chapter": 12,
        "endChapter": 12
      }
    ],
    "passage": "Lucas 11:1–28 · Génesis 19 · Salmos 12",
    "theme": "12 de enero"
  },
  {
    "day": 13,
    "month": 1,
    "date": 13,
    "sourceReference": "Lucas 11.29-54 / Génesis 20 / Salmos 13",
    "readings": [
      {
        "reference": "Lucas 11:29–54",
        "book": 42,
        "chapter": 11,
        "endChapter": 11
      },
      {
        "reference": "Génesis 20",
        "book": 1,
        "chapter": 20,
        "endChapter": 20
      },
      {
        "reference": "Salmos 13",
        "book": 19,
        "chapter": 13,
        "endChapter": 13
      }
    ],
    "passage": "Lucas 11:29–54 · Génesis 20 · Salmos 13",
    "theme": "13 de enero"
  },
  {
    "day": 14,
    "month": 1,
    "date": 14,
    "sourceReference": "Lucas 12.1-31 / Génesis 21 / Salmos 14",
    "readings": [
      {
        "reference": "Lucas 12:1–31",
        "book": 42,
        "chapter": 12,
        "endChapter": 12
      },
      {
        "reference": "Génesis 21",
        "book": 1,
        "chapter": 21,
        "endChapter": 21
      },
      {
        "reference": "Salmos 14",
        "book": 19,
        "chapter": 14,
        "endChapter": 14
      }
    ],
    "passage": "Lucas 12:1–31 · Génesis 21 · Salmos 14",
    "theme": "14 de enero"
  },
  {
    "day": 15,
    "month": 1,
    "date": 15,
    "sourceReference": "Lucas 12.32-59 / Génesis 22 / Salmos 15",
    "readings": [
      {
        "reference": "Lucas 12:32–59",
        "book": 42,
        "chapter": 12,
        "endChapter": 12
      },
      {
        "reference": "Génesis 22",
        "book": 1,
        "chapter": 22,
        "endChapter": 22
      },
      {
        "reference": "Salmos 15",
        "book": 19,
        "chapter": 15,
        "endChapter": 15
      }
    ],
    "passage": "Lucas 12:32–59 · Génesis 22 · Salmos 15",
    "theme": "15 de enero"
  },
  {
    "day": 16,
    "month": 1,
    "date": 16,
    "sourceReference": "Lucas 13.1-17 / Génesis 23 / Salmos 16",
    "readings": [
      {
        "reference": "Lucas 13:1–17",
        "book": 42,
        "chapter": 13,
        "endChapter": 13
      },
      {
        "reference": "Génesis 23",
        "book": 1,
        "chapter": 23,
        "endChapter": 23
      },
      {
        "reference": "Salmos 16",
        "book": 19,
        "chapter": 16,
        "endChapter": 16
      }
    ],
    "passage": "Lucas 13:1–17 · Génesis 23 · Salmos 16",
    "theme": "16 de enero"
  },
  {
    "day": 17,
    "month": 1,
    "date": 17,
    "sourceReference": "Lucas 13.18-35 / Génesis 24 / Salmos 17",
    "readings": [
      {
        "reference": "Lucas 13:18–35",
        "book": 42,
        "chapter": 13,
        "endChapter": 13
      },
      {
        "reference": "Génesis 24",
        "book": 1,
        "chapter": 24,
        "endChapter": 24
      },
      {
        "reference": "Salmos 17",
        "book": 19,
        "chapter": 17,
        "endChapter": 17
      }
    ],
    "passage": "Lucas 13:18–35 · Génesis 24 · Salmos 17",
    "theme": "17 de enero"
  },
  {
    "day": 18,
    "month": 1,
    "date": 18,
    "sourceReference": "Lucas 14.1-24 / Génesis 25 / Salmos 18",
    "readings": [
      {
        "reference": "Lucas 14:1–24",
        "book": 42,
        "chapter": 14,
        "endChapter": 14
      },
      {
        "reference": "Génesis 25",
        "book": 1,
        "chapter": 25,
        "endChapter": 25
      },
      {
        "reference": "Salmos 18",
        "book": 19,
        "chapter": 18,
        "endChapter": 18
      }
    ],
    "passage": "Lucas 14:1–24 · Génesis 25 · Salmos 18",
    "theme": "18 de enero"
  },
  {
    "day": 19,
    "month": 1,
    "date": 19,
    "sourceReference": "Lucas 14.25-35 / Génesis 26 / Salmos 19",
    "readings": [
      {
        "reference": "Lucas 14:25–35",
        "book": 42,
        "chapter": 14,
        "endChapter": 14
      },
      {
        "reference": "Génesis 26",
        "book": 1,
        "chapter": 26,
        "endChapter": 26
      },
      {
        "reference": "Salmos 19",
        "book": 19,
        "chapter": 19,
        "endChapter": 19
      }
    ],
    "passage": "Lucas 14:25–35 · Génesis 26 · Salmos 19",
    "theme": "19 de enero"
  },
  {
    "day": 20,
    "month": 1,
    "date": 20,
    "sourceReference": "Lucas 15 / Génesis 27.1-45 / Salmos 20",
    "readings": [
      {
        "reference": "Lucas 15",
        "book": 42,
        "chapter": 15,
        "endChapter": 15
      },
      {
        "reference": "Génesis 27:1–45",
        "book": 1,
        "chapter": 27,
        "endChapter": 27
      },
      {
        "reference": "Salmos 20",
        "book": 19,
        "chapter": 20,
        "endChapter": 20
      }
    ],
    "passage": "Lucas 15 · Génesis 27:1–45 · Salmos 20",
    "theme": "20 de enero"
  },
  {
    "day": 21,
    "month": 1,
    "date": 21,
    "sourceReference": "Lucas 16 / Génesis 27.46-28.22 / Salmos 21",
    "readings": [
      {
        "reference": "Lucas 16",
        "book": 42,
        "chapter": 16,
        "endChapter": 16
      },
      {
        "reference": "Génesis 27:46–28:22",
        "book": 1,
        "chapter": 27,
        "endChapter": 28
      },
      {
        "reference": "Salmos 21",
        "book": 19,
        "chapter": 21,
        "endChapter": 21
      }
    ],
    "passage": "Lucas 16 · Génesis 27:46–28:22 · Salmos 21",
    "theme": "21 de enero"
  },
  {
    "day": 22,
    "month": 1,
    "date": 22,
    "sourceReference": "Lucas 17 / Génesis 29.1-30 / Salmos 22",
    "readings": [
      {
        "reference": "Lucas 17",
        "book": 42,
        "chapter": 17,
        "endChapter": 17
      },
      {
        "reference": "Génesis 29:1–30",
        "book": 1,
        "chapter": 29,
        "endChapter": 29
      },
      {
        "reference": "Salmos 22",
        "book": 19,
        "chapter": 22,
        "endChapter": 22
      }
    ],
    "passage": "Lucas 17 · Génesis 29:1–30 · Salmos 22",
    "theme": "22 de enero"
  },
  {
    "day": 23,
    "month": 1,
    "date": 23,
    "sourceReference": "Lucas 18.1-17 / Génesis 29.31-30.43 / Salmos 23",
    "readings": [
      {
        "reference": "Lucas 18:1–17",
        "book": 42,
        "chapter": 18,
        "endChapter": 18
      },
      {
        "reference": "Génesis 29:31–30:43",
        "book": 1,
        "chapter": 29,
        "endChapter": 30
      },
      {
        "reference": "Salmos 23",
        "book": 19,
        "chapter": 23,
        "endChapter": 23
      }
    ],
    "passage": "Lucas 18:1–17 · Génesis 29:31–30:43 · Salmos 23",
    "theme": "23 de enero"
  },
  {
    "day": 24,
    "month": 1,
    "date": 24,
    "sourceReference": "Lucas 18.18-43 / Génesis 31 / Salmos 24",
    "readings": [
      {
        "reference": "Lucas 18:18–43",
        "book": 42,
        "chapter": 18,
        "endChapter": 18
      },
      {
        "reference": "Génesis 31",
        "book": 1,
        "chapter": 31,
        "endChapter": 31
      },
      {
        "reference": "Salmos 24",
        "book": 19,
        "chapter": 24,
        "endChapter": 24
      }
    ],
    "passage": "Lucas 18:18–43 · Génesis 31 · Salmos 24",
    "theme": "24 de enero"
  },
  {
    "day": 25,
    "month": 1,
    "date": 25,
    "sourceReference": "Lucas 19.1-27 / Génesis 32-33 / Salmos 25",
    "readings": [
      {
        "reference": "Lucas 19:1–27",
        "book": 42,
        "chapter": 19,
        "endChapter": 19
      },
      {
        "reference": "Génesis 32–33",
        "book": 1,
        "chapter": 32,
        "endChapter": 33
      },
      {
        "reference": "Salmos 25",
        "book": 19,
        "chapter": 25,
        "endChapter": 25
      }
    ],
    "passage": "Lucas 19:1–27 · Génesis 32–33 · Salmos 25",
    "theme": "25 de enero"
  },
  {
    "day": 26,
    "month": 1,
    "date": 26,
    "sourceReference": "Lucas 19.28-48 / Génesis 34 / Salmos 26",
    "readings": [
      {
        "reference": "Lucas 19:28–48",
        "book": 42,
        "chapter": 19,
        "endChapter": 19
      },
      {
        "reference": "Génesis 34",
        "book": 1,
        "chapter": 34,
        "endChapter": 34
      },
      {
        "reference": "Salmos 26",
        "book": 19,
        "chapter": 26,
        "endChapter": 26
      }
    ],
    "passage": "Lucas 19:28–48 · Génesis 34 · Salmos 26",
    "theme": "26 de enero"
  },
  {
    "day": 27,
    "month": 1,
    "date": 27,
    "sourceReference": "Lucas 20.1-26 / Génesis 35-36 / Salmos 27",
    "readings": [
      {
        "reference": "Lucas 20:1–26",
        "book": 42,
        "chapter": 20,
        "endChapter": 20
      },
      {
        "reference": "Génesis 35–36",
        "book": 1,
        "chapter": 35,
        "endChapter": 36
      },
      {
        "reference": "Salmos 27",
        "book": 19,
        "chapter": 27,
        "endChapter": 27
      }
    ],
    "passage": "Lucas 20:1–26 · Génesis 35–36 · Salmos 27",
    "theme": "27 de enero"
  },
  {
    "day": 28,
    "month": 1,
    "date": 28,
    "sourceReference": "Lucas 20.27-47 / Génesis 37 / Salmos 28",
    "readings": [
      {
        "reference": "Lucas 20:27–47",
        "book": 42,
        "chapter": 20,
        "endChapter": 20
      },
      {
        "reference": "Génesis 37",
        "book": 1,
        "chapter": 37,
        "endChapter": 37
      },
      {
        "reference": "Salmos 28",
        "book": 19,
        "chapter": 28,
        "endChapter": 28
      }
    ],
    "passage": "Lucas 20:27–47 · Génesis 37 · Salmos 28",
    "theme": "28 de enero"
  },
  {
    "day": 29,
    "month": 1,
    "date": 29,
    "sourceReference": "Lucas 21 / Génesis 38 / Salmos 29",
    "readings": [
      {
        "reference": "Lucas 21",
        "book": 42,
        "chapter": 21,
        "endChapter": 21
      },
      {
        "reference": "Génesis 38",
        "book": 1,
        "chapter": 38,
        "endChapter": 38
      },
      {
        "reference": "Salmos 29",
        "book": 19,
        "chapter": 29,
        "endChapter": 29
      }
    ],
    "passage": "Lucas 21 · Génesis 38 · Salmos 29",
    "theme": "29 de enero"
  },
  {
    "day": 30,
    "month": 1,
    "date": 30,
    "sourceReference": "Lucas 22.1-38 / Génesis 39 / Salmos 30",
    "readings": [
      {
        "reference": "Lucas 22:1–38",
        "book": 42,
        "chapter": 22,
        "endChapter": 22
      },
      {
        "reference": "Génesis 39",
        "book": 1,
        "chapter": 39,
        "endChapter": 39
      },
      {
        "reference": "Salmos 30",
        "book": 19,
        "chapter": 30,
        "endChapter": 30
      }
    ],
    "passage": "Lucas 22:1–38 · Génesis 39 · Salmos 30",
    "theme": "30 de enero"
  },
  {
    "day": 31,
    "month": 1,
    "date": 31,
    "sourceReference": "Lucas 22.39-71 / Génesis 40 / Salmos 31",
    "readings": [
      {
        "reference": "Lucas 22:39–71",
        "book": 42,
        "chapter": 22,
        "endChapter": 22
      },
      {
        "reference": "Génesis 40",
        "book": 1,
        "chapter": 40,
        "endChapter": 40
      },
      {
        "reference": "Salmos 31",
        "book": 19,
        "chapter": 31,
        "endChapter": 31
      }
    ],
    "passage": "Lucas 22:39–71 · Génesis 40 · Salmos 31",
    "theme": "31 de enero"
  },
  {
    "day": 32,
    "month": 2,
    "date": 1,
    "sourceReference": "Lucas 23.1-25 / Génesis 41 / Salmos 32",
    "readings": [
      {
        "reference": "Lucas 23:1–25",
        "book": 42,
        "chapter": 23,
        "endChapter": 23
      },
      {
        "reference": "Génesis 41",
        "book": 1,
        "chapter": 41,
        "endChapter": 41
      },
      {
        "reference": "Salmos 32",
        "book": 19,
        "chapter": 32,
        "endChapter": 32
      }
    ],
    "passage": "Lucas 23:1–25 · Génesis 41 · Salmos 32",
    "theme": "1 de febrero"
  },
  {
    "day": 33,
    "month": 2,
    "date": 2,
    "sourceReference": "Lucas 23.26-56 / Génesis 42 / Salmos 33",
    "readings": [
      {
        "reference": "Lucas 23:26–56",
        "book": 42,
        "chapter": 23,
        "endChapter": 23
      },
      {
        "reference": "Génesis 42",
        "book": 1,
        "chapter": 42,
        "endChapter": 42
      },
      {
        "reference": "Salmos 33",
        "book": 19,
        "chapter": 33,
        "endChapter": 33
      }
    ],
    "passage": "Lucas 23:26–56 · Génesis 42 · Salmos 33",
    "theme": "2 de febrero"
  },
  {
    "day": 34,
    "month": 2,
    "date": 3,
    "sourceReference": "Lucas 24.1-12 / Génesis 43 / Salmos 34",
    "readings": [
      {
        "reference": "Lucas 24:1–12",
        "book": 42,
        "chapter": 24,
        "endChapter": 24
      },
      {
        "reference": "Génesis 43",
        "book": 1,
        "chapter": 43,
        "endChapter": 43
      },
      {
        "reference": "Salmos 34",
        "book": 19,
        "chapter": 34,
        "endChapter": 34
      }
    ],
    "passage": "Lucas 24:1–12 · Génesis 43 · Salmos 34",
    "theme": "3 de febrero"
  },
  {
    "day": 35,
    "month": 2,
    "date": 4,
    "sourceReference": "Lucas 24.13-53 / Génesis 44 / Salmos 35",
    "readings": [
      {
        "reference": "Lucas 24:13–53",
        "book": 42,
        "chapter": 24,
        "endChapter": 24
      },
      {
        "reference": "Génesis 44",
        "book": 1,
        "chapter": 44,
        "endChapter": 44
      },
      {
        "reference": "Salmos 35",
        "book": 19,
        "chapter": 35,
        "endChapter": 35
      }
    ],
    "passage": "Lucas 24:13–53 · Génesis 44 · Salmos 35",
    "theme": "4 de febrero"
  },
  {
    "day": 36,
    "month": 2,
    "date": 5,
    "sourceReference": "Hebreos 1 / Génesis 45.1-46.27 / Salmos 36",
    "readings": [
      {
        "reference": "Hebreos 1",
        "book": 58,
        "chapter": 1,
        "endChapter": 1
      },
      {
        "reference": "Génesis 45:1–46:27",
        "book": 1,
        "chapter": 45,
        "endChapter": 46
      },
      {
        "reference": "Salmos 36",
        "book": 19,
        "chapter": 36,
        "endChapter": 36
      }
    ],
    "passage": "Hebreos 1 · Génesis 45:1–46:27 · Salmos 36",
    "theme": "5 de febrero"
  },
  {
    "day": 37,
    "month": 2,
    "date": 6,
    "sourceReference": "Hebreos 2 / Génesis 46.28-47.31 / Salmos 37",
    "readings": [
      {
        "reference": "Hebreos 2",
        "book": 58,
        "chapter": 2,
        "endChapter": 2
      },
      {
        "reference": "Génesis 46:28–47:31",
        "book": 1,
        "chapter": 46,
        "endChapter": 47
      },
      {
        "reference": "Salmos 37",
        "book": 19,
        "chapter": 37,
        "endChapter": 37
      }
    ],
    "passage": "Hebreos 2 · Génesis 46:28–47:31 · Salmos 37",
    "theme": "6 de febrero"
  },
  {
    "day": 38,
    "month": 2,
    "date": 7,
    "sourceReference": "Hebreos 3. 1-4.13 / Génesis 48 / Salmos 38",
    "readings": [
      {
        "reference": "Hebreos 3:1–4:13",
        "book": 58,
        "chapter": 3,
        "endChapter": 4
      },
      {
        "reference": "Génesis 48",
        "book": 1,
        "chapter": 48,
        "endChapter": 48
      },
      {
        "reference": "Salmos 38",
        "book": 19,
        "chapter": 38,
        "endChapter": 38
      }
    ],
    "passage": "Hebreos 3:1–4:13 · Génesis 48 · Salmos 38",
    "theme": "7 de febrero"
  },
  {
    "day": 39,
    "month": 2,
    "date": 8,
    "sourceReference": "Hebreos 4.14-6.12 / Génesis 49-50 / Salmos 39",
    "readings": [
      {
        "reference": "Hebreos 4:14–6:12",
        "book": 58,
        "chapter": 4,
        "endChapter": 6
      },
      {
        "reference": "Génesis 49–50",
        "book": 1,
        "chapter": 49,
        "endChapter": 50
      },
      {
        "reference": "Salmos 39",
        "book": 19,
        "chapter": 39,
        "endChapter": 39
      }
    ],
    "passage": "Hebreos 4:14–6:12 · Génesis 49–50 · Salmos 39",
    "theme": "8 de febrero"
  },
  {
    "day": 40,
    "month": 2,
    "date": 9,
    "sourceReference": "Hebreos 6.13-20 / Éxodo 1-2 / Salmos 40",
    "readings": [
      {
        "reference": "Hebreos 6:13–20",
        "book": 58,
        "chapter": 6,
        "endChapter": 6
      },
      {
        "reference": "Éxodo 1–2",
        "book": 2,
        "chapter": 1,
        "endChapter": 2
      },
      {
        "reference": "Salmos 40",
        "book": 19,
        "chapter": 40,
        "endChapter": 40
      }
    ],
    "passage": "Hebreos 6:13–20 · Éxodo 1–2 · Salmos 40",
    "theme": "9 de febrero"
  },
  {
    "day": 41,
    "month": 2,
    "date": 10,
    "sourceReference": "Hebreos 7 / Éxodo 3-4 / Salmos 41",
    "readings": [
      {
        "reference": "Hebreos 7",
        "book": 58,
        "chapter": 7,
        "endChapter": 7
      },
      {
        "reference": "Éxodo 3–4",
        "book": 2,
        "chapter": 3,
        "endChapter": 4
      },
      {
        "reference": "Salmos 41",
        "book": 19,
        "chapter": 41,
        "endChapter": 41
      }
    ],
    "passage": "Hebreos 7 · Éxodo 3–4 · Salmos 41",
    "theme": "10 de febrero"
  },
  {
    "day": 42,
    "month": 2,
    "date": 11,
    "sourceReference": "Hebreos 8 / Éxodo 5.1-6.27 / Proverbios 1",
    "readings": [
      {
        "reference": "Hebreos 8",
        "book": 58,
        "chapter": 8,
        "endChapter": 8
      },
      {
        "reference": "Éxodo 5:1–6:27",
        "book": 2,
        "chapter": 5,
        "endChapter": 6
      },
      {
        "reference": "Proverbios 1",
        "book": 20,
        "chapter": 1,
        "endChapter": 1
      }
    ],
    "passage": "Hebreos 8 · Éxodo 5:1–6:27 · Proverbios 1",
    "theme": "11 de febrero"
  },
  {
    "day": 43,
    "month": 2,
    "date": 12,
    "sourceReference": "Hebreos 9.1-22 / Éxodo 6.28-8.32 / Proverbios 2",
    "readings": [
      {
        "reference": "Hebreos 9:1–22",
        "book": 58,
        "chapter": 9,
        "endChapter": 9
      },
      {
        "reference": "Éxodo 6:28–8:32",
        "book": 2,
        "chapter": 6,
        "endChapter": 8
      },
      {
        "reference": "Proverbios 2",
        "book": 20,
        "chapter": 2,
        "endChapter": 2
      }
    ],
    "passage": "Hebreos 9:1–22 · Éxodo 6:28–8:32 · Proverbios 2",
    "theme": "12 de febrero"
  },
  {
    "day": 44,
    "month": 2,
    "date": 13,
    "sourceReference": "Hebreos 9.23-10.18 / Éxodo 9-10 / Proverbios 3",
    "readings": [
      {
        "reference": "Hebreos 9:23–10:18",
        "book": 58,
        "chapter": 9,
        "endChapter": 10
      },
      {
        "reference": "Éxodo 9–10",
        "book": 2,
        "chapter": 9,
        "endChapter": 10
      },
      {
        "reference": "Proverbios 3",
        "book": 20,
        "chapter": 3,
        "endChapter": 3
      }
    ],
    "passage": "Hebreos 9:23–10:18 · Éxodo 9–10 · Proverbios 3",
    "theme": "13 de febrero"
  },
  {
    "day": 45,
    "month": 2,
    "date": 14,
    "sourceReference": "Hebreos 10.19-39 / Éxodo 11-12 / Proverbios 4",
    "readings": [
      {
        "reference": "Hebreos 10:19–39",
        "book": 58,
        "chapter": 10,
        "endChapter": 10
      },
      {
        "reference": "Éxodo 11–12",
        "book": 2,
        "chapter": 11,
        "endChapter": 12
      },
      {
        "reference": "Proverbios 4",
        "book": 20,
        "chapter": 4,
        "endChapter": 4
      }
    ],
    "passage": "Hebreos 10:19–39 · Éxodo 11–12 · Proverbios 4",
    "theme": "14 de febrero"
  },
  {
    "day": 46,
    "month": 2,
    "date": 15,
    "sourceReference": "Hebreos 11.1-21 / Éxodo 13-14 / Proverbios 5",
    "readings": [
      {
        "reference": "Hebreos 11:1–21",
        "book": 58,
        "chapter": 11,
        "endChapter": 11
      },
      {
        "reference": "Éxodo 13–14",
        "book": 2,
        "chapter": 13,
        "endChapter": 14
      },
      {
        "reference": "Proverbios 5",
        "book": 20,
        "chapter": 5,
        "endChapter": 5
      }
    ],
    "passage": "Hebreos 11:1–21 · Éxodo 13–14 · Proverbios 5",
    "theme": "15 de febrero"
  },
  {
    "day": 47,
    "month": 2,
    "date": 16,
    "sourceReference": "Hebreos 11.22-40 / Éxodo 15 / Proverbios 6.1-7.5",
    "readings": [
      {
        "reference": "Hebreos 11:22–40",
        "book": 58,
        "chapter": 11,
        "endChapter": 11
      },
      {
        "reference": "Éxodo 15",
        "book": 2,
        "chapter": 15,
        "endChapter": 15
      },
      {
        "reference": "Proverbios 6:1–7:5",
        "book": 20,
        "chapter": 6,
        "endChapter": 7
      }
    ],
    "passage": "Hebreos 11:22–40 · Éxodo 15 · Proverbios 6:1–7:5",
    "theme": "16 de febrero"
  },
  {
    "day": 48,
    "month": 2,
    "date": 17,
    "sourceReference": "Hebreos 12 / Éxodo 16-17 / Proverbios 7.6-27",
    "readings": [
      {
        "reference": "Hebreos 12",
        "book": 58,
        "chapter": 12,
        "endChapter": 12
      },
      {
        "reference": "Éxodo 16–17",
        "book": 2,
        "chapter": 16,
        "endChapter": 17
      },
      {
        "reference": "Proverbios 7:6–27",
        "book": 20,
        "chapter": 7,
        "endChapter": 7
      }
    ],
    "passage": "Hebreos 12 · Éxodo 16–17 · Proverbios 7:6–27",
    "theme": "17 de febrero"
  },
  {
    "day": 49,
    "month": 2,
    "date": 18,
    "sourceReference": "Hebreos 13 / Éxodo 18-19 / Proverbios 8",
    "readings": [
      {
        "reference": "Hebreos 13",
        "book": 58,
        "chapter": 13,
        "endChapter": 13
      },
      {
        "reference": "Éxodo 18–19",
        "book": 2,
        "chapter": 18,
        "endChapter": 19
      },
      {
        "reference": "Proverbios 8",
        "book": 20,
        "chapter": 8,
        "endChapter": 8
      }
    ],
    "passage": "Hebreos 13 · Éxodo 18–19 · Proverbios 8",
    "theme": "18 de febrero"
  },
  {
    "day": 50,
    "month": 2,
    "date": 19,
    "sourceReference": "Mateo 1 / Éxodo 20-21 / Proverbios 9",
    "readings": [
      {
        "reference": "Mateo 1",
        "book": 40,
        "chapter": 1,
        "endChapter": 1
      },
      {
        "reference": "Éxodo 20–21",
        "book": 2,
        "chapter": 20,
        "endChapter": 21
      },
      {
        "reference": "Proverbios 9",
        "book": 20,
        "chapter": 9,
        "endChapter": 9
      }
    ],
    "passage": "Mateo 1 · Éxodo 20–21 · Proverbios 9",
    "theme": "19 de febrero"
  },
  {
    "day": 51,
    "month": 2,
    "date": 20,
    "sourceReference": "Mateo 2 / Éxodo 22-23 / Proverbios 10",
    "readings": [
      {
        "reference": "Mateo 2",
        "book": 40,
        "chapter": 2,
        "endChapter": 2
      },
      {
        "reference": "Éxodo 22–23",
        "book": 2,
        "chapter": 22,
        "endChapter": 23
      },
      {
        "reference": "Proverbios 10",
        "book": 20,
        "chapter": 10,
        "endChapter": 10
      }
    ],
    "passage": "Mateo 2 · Éxodo 22–23 · Proverbios 10",
    "theme": "20 de febrero"
  },
  {
    "day": 52,
    "month": 2,
    "date": 21,
    "sourceReference": "Mateo 3 / Éxodo 24 / Proverbios 11",
    "readings": [
      {
        "reference": "Mateo 3",
        "book": 40,
        "chapter": 3,
        "endChapter": 3
      },
      {
        "reference": "Éxodo 24",
        "book": 2,
        "chapter": 24,
        "endChapter": 24
      },
      {
        "reference": "Proverbios 11",
        "book": 20,
        "chapter": 11,
        "endChapter": 11
      }
    ],
    "passage": "Mateo 3 · Éxodo 24 · Proverbios 11",
    "theme": "21 de febrero"
  },
  {
    "day": 53,
    "month": 2,
    "date": 22,
    "sourceReference": "Mateo 4 / Éxodo 25-27 / Proverbios 12",
    "readings": [
      {
        "reference": "Mateo 4",
        "book": 40,
        "chapter": 4,
        "endChapter": 4
      },
      {
        "reference": "Éxodo 25–27",
        "book": 2,
        "chapter": 25,
        "endChapter": 27
      },
      {
        "reference": "Proverbios 12",
        "book": 20,
        "chapter": 12,
        "endChapter": 12
      }
    ],
    "passage": "Mateo 4 · Éxodo 25–27 · Proverbios 12",
    "theme": "22 de febrero"
  },
  {
    "day": 54,
    "month": 2,
    "date": 23,
    "sourceReference": "Mateo 5.1-20 / Éxodo 28-29 / Proverbios 13",
    "readings": [
      {
        "reference": "Mateo 5:1–20",
        "book": 40,
        "chapter": 5,
        "endChapter": 5
      },
      {
        "reference": "Éxodo 28–29",
        "book": 2,
        "chapter": 28,
        "endChapter": 29
      },
      {
        "reference": "Proverbios 13",
        "book": 20,
        "chapter": 13,
        "endChapter": 13
      }
    ],
    "passage": "Mateo 5:1–20 · Éxodo 28–29 · Proverbios 13",
    "theme": "23 de febrero"
  },
  {
    "day": 55,
    "month": 2,
    "date": 24,
    "sourceReference": "Mateo 5. 21-48 / Éxodo 30-32 / Proverbios 14",
    "readings": [
      {
        "reference": "Mateo 5:21–48",
        "book": 40,
        "chapter": 5,
        "endChapter": 5
      },
      {
        "reference": "Éxodo 30–32",
        "book": 2,
        "chapter": 30,
        "endChapter": 32
      },
      {
        "reference": "Proverbios 14",
        "book": 20,
        "chapter": 14,
        "endChapter": 14
      }
    ],
    "passage": "Mateo 5:21–48 · Éxodo 30–32 · Proverbios 14",
    "theme": "24 de febrero"
  },
  {
    "day": 56,
    "month": 2,
    "date": 25,
    "sourceReference": "Mateo 6.1-18 / Éxodo 33-34 / Proverbios 15",
    "readings": [
      {
        "reference": "Mateo 6:1–18",
        "book": 40,
        "chapter": 6,
        "endChapter": 6
      },
      {
        "reference": "Éxodo 33–34",
        "book": 2,
        "chapter": 33,
        "endChapter": 34
      },
      {
        "reference": "Proverbios 15",
        "book": 20,
        "chapter": 15,
        "endChapter": 15
      }
    ],
    "passage": "Mateo 6:1–18 · Éxodo 33–34 · Proverbios 15",
    "theme": "25 de febrero"
  },
  {
    "day": 57,
    "month": 2,
    "date": 26,
    "sourceReference": "Mateo 6.19-34 / Éxodo 35-36 / Proverbios 16",
    "readings": [
      {
        "reference": "Mateo 6:19–34",
        "book": 40,
        "chapter": 6,
        "endChapter": 6
      },
      {
        "reference": "Éxodo 35–36",
        "book": 2,
        "chapter": 35,
        "endChapter": 36
      },
      {
        "reference": "Proverbios 16",
        "book": 20,
        "chapter": 16,
        "endChapter": 16
      }
    ],
    "passage": "Mateo 6:19–34 · Éxodo 35–36 · Proverbios 16",
    "theme": "26 de febrero"
  },
  {
    "day": 58,
    "month": 2,
    "date": 27,
    "sourceReference": "Mateo 7 / Éxodo 37-38 / Proverbios 17",
    "readings": [
      {
        "reference": "Mateo 7",
        "book": 40,
        "chapter": 7,
        "endChapter": 7
      },
      {
        "reference": "Éxodo 37–38",
        "book": 2,
        "chapter": 37,
        "endChapter": 38
      },
      {
        "reference": "Proverbios 17",
        "book": 20,
        "chapter": 17,
        "endChapter": 17
      }
    ],
    "passage": "Mateo 7 · Éxodo 37–38 · Proverbios 17",
    "theme": "27 de febrero"
  },
  {
    "day": 59,
    "month": 2,
    "date": 28,
    "sourceReference": "Mateo 8.1-22 / Éxodo 39-40 / Proverbios 18",
    "readings": [
      {
        "reference": "Mateo 8:1–22",
        "book": 40,
        "chapter": 8,
        "endChapter": 8
      },
      {
        "reference": "Éxodo 39–40",
        "book": 2,
        "chapter": 39,
        "endChapter": 40
      },
      {
        "reference": "Proverbios 18",
        "book": 20,
        "chapter": 18,
        "endChapter": 18
      }
    ],
    "passage": "Mateo 8:1–22 · Éxodo 39–40 · Proverbios 18",
    "theme": "28 de febrero"
  },
  {
    "day": 60,
    "month": 3,
    "date": 1,
    "sourceReference": "Mateo 8.23-34 / Levítico 1-2 / Proverbios 19",
    "readings": [
      {
        "reference": "Mateo 8:23–34",
        "book": 40,
        "chapter": 8,
        "endChapter": 8
      },
      {
        "reference": "Levítico 1–2",
        "book": 3,
        "chapter": 1,
        "endChapter": 2
      },
      {
        "reference": "Proverbios 19",
        "book": 20,
        "chapter": 19,
        "endChapter": 19
      }
    ],
    "passage": "Mateo 8:23–34 · Levítico 1–2 · Proverbios 19",
    "theme": "1 de marzo"
  },
  {
    "day": 61,
    "month": 3,
    "date": 2,
    "sourceReference": "Mateo 9.1-17 / Levítico 3-4 / Proverbios 20",
    "readings": [
      {
        "reference": "Mateo 9:1–17",
        "book": 40,
        "chapter": 9,
        "endChapter": 9
      },
      {
        "reference": "Levítico 3–4",
        "book": 3,
        "chapter": 3,
        "endChapter": 4
      },
      {
        "reference": "Proverbios 20",
        "book": 20,
        "chapter": 20,
        "endChapter": 20
      }
    ],
    "passage": "Mateo 9:1–17 · Levítico 3–4 · Proverbios 20",
    "theme": "2 de marzo"
  },
  {
    "day": 62,
    "month": 3,
    "date": 3,
    "sourceReference": "Mateo 9.18-38 / Levítico 5-6 / Proverbios 21",
    "readings": [
      {
        "reference": "Mateo 9:18–38",
        "book": 40,
        "chapter": 9,
        "endChapter": 9
      },
      {
        "reference": "Levítico 5–6",
        "book": 3,
        "chapter": 5,
        "endChapter": 6
      },
      {
        "reference": "Proverbios 21",
        "book": 20,
        "chapter": 21,
        "endChapter": 21
      }
    ],
    "passage": "Mateo 9:18–38 · Levítico 5–6 · Proverbios 21",
    "theme": "3 de marzo"
  },
  {
    "day": 63,
    "month": 3,
    "date": 4,
    "sourceReference": "Mateo 10.1-25 / Levítico 7-8 / Proverbios 22",
    "readings": [
      {
        "reference": "Mateo 10:1–25",
        "book": 40,
        "chapter": 10,
        "endChapter": 10
      },
      {
        "reference": "Levítico 7–8",
        "book": 3,
        "chapter": 7,
        "endChapter": 8
      },
      {
        "reference": "Proverbios 22",
        "book": 20,
        "chapter": 22,
        "endChapter": 22
      }
    ],
    "passage": "Mateo 10:1–25 · Levítico 7–8 · Proverbios 22",
    "theme": "4 de marzo"
  },
  {
    "day": 64,
    "month": 3,
    "date": 5,
    "sourceReference": "Mateo 10.26-42 / Levítico 9-10 / Proverbios 23",
    "readings": [
      {
        "reference": "Mateo 10:26–42",
        "book": 40,
        "chapter": 10,
        "endChapter": 10
      },
      {
        "reference": "Levítico 9–10",
        "book": 3,
        "chapter": 9,
        "endChapter": 10
      },
      {
        "reference": "Proverbios 23",
        "book": 20,
        "chapter": 23,
        "endChapter": 23
      }
    ],
    "passage": "Mateo 10:26–42 · Levítico 9–10 · Proverbios 23",
    "theme": "5 de marzo"
  },
  {
    "day": 65,
    "month": 3,
    "date": 6,
    "sourceReference": "Mateo 11.1-19 / Levítico 11-12 / Proverbios 24",
    "readings": [
      {
        "reference": "Mateo 11:1–19",
        "book": 40,
        "chapter": 11,
        "endChapter": 11
      },
      {
        "reference": "Levítico 11–12",
        "book": 3,
        "chapter": 11,
        "endChapter": 12
      },
      {
        "reference": "Proverbios 24",
        "book": 20,
        "chapter": 24,
        "endChapter": 24
      }
    ],
    "passage": "Mateo 11:1–19 · Levítico 11–12 · Proverbios 24",
    "theme": "6 de marzo"
  },
  {
    "day": 66,
    "month": 3,
    "date": 7,
    "sourceReference": "Mateo 11.20-30 / Levítico 13 / Proverbios 25",
    "readings": [
      {
        "reference": "Mateo 11:20–30",
        "book": 40,
        "chapter": 11,
        "endChapter": 11
      },
      {
        "reference": "Levítico 13",
        "book": 3,
        "chapter": 13,
        "endChapter": 13
      },
      {
        "reference": "Proverbios 25",
        "book": 20,
        "chapter": 25,
        "endChapter": 25
      }
    ],
    "passage": "Mateo 11:20–30 · Levítico 13 · Proverbios 25",
    "theme": "7 de marzo"
  },
  {
    "day": 67,
    "month": 3,
    "date": 8,
    "sourceReference": "Mateo 12.1-21 / Levítico 14 / Proverbios 26",
    "readings": [
      {
        "reference": "Mateo 12:1–21",
        "book": 40,
        "chapter": 12,
        "endChapter": 12
      },
      {
        "reference": "Levítico 14",
        "book": 3,
        "chapter": 14,
        "endChapter": 14
      },
      {
        "reference": "Proverbios 26",
        "book": 20,
        "chapter": 26,
        "endChapter": 26
      }
    ],
    "passage": "Mateo 12:1–21 · Levítico 14 · Proverbios 26",
    "theme": "8 de marzo"
  },
  {
    "day": 68,
    "month": 3,
    "date": 9,
    "sourceReference": "Mateo 12.22-50 / Levítico 15-16 / Proverbios 27",
    "readings": [
      {
        "reference": "Mateo 12:22–50",
        "book": 40,
        "chapter": 12,
        "endChapter": 12
      },
      {
        "reference": "Levítico 15–16",
        "book": 3,
        "chapter": 15,
        "endChapter": 16
      },
      {
        "reference": "Proverbios 27",
        "book": 20,
        "chapter": 27,
        "endChapter": 27
      }
    ],
    "passage": "Mateo 12:22–50 · Levítico 15–16 · Proverbios 27",
    "theme": "9 de marzo"
  },
  {
    "day": 69,
    "month": 3,
    "date": 10,
    "sourceReference": "Mateo 13.1-23 / Levítico 17-18 / Proverbios 28",
    "readings": [
      {
        "reference": "Mateo 13:1–23",
        "book": 40,
        "chapter": 13,
        "endChapter": 13
      },
      {
        "reference": "Levítico 17–18",
        "book": 3,
        "chapter": 17,
        "endChapter": 18
      },
      {
        "reference": "Proverbios 28",
        "book": 20,
        "chapter": 28,
        "endChapter": 28
      }
    ],
    "passage": "Mateo 13:1–23 · Levítico 17–18 · Proverbios 28",
    "theme": "10 de marzo"
  },
  {
    "day": 70,
    "month": 3,
    "date": 11,
    "sourceReference": "Mateo 13.24-58 / Levítico 19 / Proverbios 29",
    "readings": [
      {
        "reference": "Mateo 13:24–58",
        "book": 40,
        "chapter": 13,
        "endChapter": 13
      },
      {
        "reference": "Levítico 19",
        "book": 3,
        "chapter": 19,
        "endChapter": 19
      },
      {
        "reference": "Proverbios 29",
        "book": 20,
        "chapter": 29,
        "endChapter": 29
      }
    ],
    "passage": "Mateo 13:24–58 · Levítico 19 · Proverbios 29",
    "theme": "11 de marzo"
  },
  {
    "day": 71,
    "month": 3,
    "date": 12,
    "sourceReference": "Mateo 14.1-21 / Levítico 20-21 / Proverbios 30",
    "readings": [
      {
        "reference": "Mateo 14:1–21",
        "book": 40,
        "chapter": 14,
        "endChapter": 14
      },
      {
        "reference": "Levítico 20–21",
        "book": 3,
        "chapter": 20,
        "endChapter": 21
      },
      {
        "reference": "Proverbios 30",
        "book": 20,
        "chapter": 30,
        "endChapter": 30
      }
    ],
    "passage": "Mateo 14:1–21 · Levítico 20–21 · Proverbios 30",
    "theme": "12 de marzo"
  },
  {
    "day": 72,
    "month": 3,
    "date": 13,
    "sourceReference": "Mateo 14.22-36 / Levítico 22-23 / Proverbios 31",
    "readings": [
      {
        "reference": "Mateo 14:22–36",
        "book": 40,
        "chapter": 14,
        "endChapter": 14
      },
      {
        "reference": "Levítico 22–23",
        "book": 3,
        "chapter": 22,
        "endChapter": 23
      },
      {
        "reference": "Proverbios 31",
        "book": 20,
        "chapter": 31,
        "endChapter": 31
      }
    ],
    "passage": "Mateo 14:22–36 · Levítico 22–23 · Proverbios 31",
    "theme": "13 de marzo"
  },
  {
    "day": 73,
    "month": 3,
    "date": 14,
    "sourceReference": "Mateo 15.1-20 / Levítico 24-25 / Eclesiastés 1.1-11",
    "readings": [
      {
        "reference": "Mateo 15:1–20",
        "book": 40,
        "chapter": 15,
        "endChapter": 15
      },
      {
        "reference": "Levítico 24–25",
        "book": 3,
        "chapter": 24,
        "endChapter": 25
      },
      {
        "reference": "Eclesiastés 1:1–11",
        "book": 21,
        "chapter": 1,
        "endChapter": 1
      }
    ],
    "passage": "Mateo 15:1–20 · Levítico 24–25 · Eclesiastés 1:1–11",
    "theme": "14 de marzo"
  },
  {
    "day": 74,
    "month": 3,
    "date": 15,
    "sourceReference": "Mateo 15.21-39 / Levítico 26-27 / Eclesiastés 1.12-2.26",
    "readings": [
      {
        "reference": "Mateo 15:21–39",
        "book": 40,
        "chapter": 15,
        "endChapter": 15
      },
      {
        "reference": "Levítico 26–27",
        "book": 3,
        "chapter": 26,
        "endChapter": 27
      },
      {
        "reference": "Eclesiastés 1:12–2:26",
        "book": 21,
        "chapter": 1,
        "endChapter": 2
      }
    ],
    "passage": "Mateo 15:21–39 · Levítico 26–27 · Eclesiastés 1:12–2:26",
    "theme": "15 de marzo"
  },
  {
    "day": 75,
    "month": 3,
    "date": 16,
    "sourceReference": "Mateo 16 / Números 1-2 / Eclesiastés 3.1-15",
    "readings": [
      {
        "reference": "Mateo 16",
        "book": 40,
        "chapter": 16,
        "endChapter": 16
      },
      {
        "reference": "Números 1–2",
        "book": 4,
        "chapter": 1,
        "endChapter": 2
      },
      {
        "reference": "Eclesiastés 3:1–15",
        "book": 21,
        "chapter": 3,
        "endChapter": 3
      }
    ],
    "passage": "Mateo 16 · Números 1–2 · Eclesiastés 3:1–15",
    "theme": "16 de marzo"
  },
  {
    "day": 76,
    "month": 3,
    "date": 17,
    "sourceReference": "Mateo 17 / Números 3-4 / Eclesiastés 3.16-4.16",
    "readings": [
      {
        "reference": "Mateo 17",
        "book": 40,
        "chapter": 17,
        "endChapter": 17
      },
      {
        "reference": "Números 3–4",
        "book": 4,
        "chapter": 3,
        "endChapter": 4
      },
      {
        "reference": "Eclesiastés 3:16–4:16",
        "book": 21,
        "chapter": 3,
        "endChapter": 4
      }
    ],
    "passage": "Mateo 17 · Números 3–4 · Eclesiastés 3:16–4:16",
    "theme": "17 de marzo"
  },
  {
    "day": 77,
    "month": 3,
    "date": 18,
    "sourceReference": "Mateo 18.1-17 / Números 5-6 / Eclesiastés 5",
    "readings": [
      {
        "reference": "Mateo 18:1–17",
        "book": 40,
        "chapter": 18,
        "endChapter": 18
      },
      {
        "reference": "Números 5–6",
        "book": 4,
        "chapter": 5,
        "endChapter": 6
      },
      {
        "reference": "Eclesiastés 5",
        "book": 21,
        "chapter": 5,
        "endChapter": 5
      }
    ],
    "passage": "Mateo 18:1–17 · Números 5–6 · Eclesiastés 5",
    "theme": "18 de marzo"
  },
  {
    "day": 78,
    "month": 3,
    "date": 19,
    "sourceReference": "Mateo 18.18-35 / Números 7-8 / Eclesiastés 6",
    "readings": [
      {
        "reference": "Mateo 18:18–35",
        "book": 40,
        "chapter": 18,
        "endChapter": 18
      },
      {
        "reference": "Números 7–8",
        "book": 4,
        "chapter": 7,
        "endChapter": 8
      },
      {
        "reference": "Eclesiastés 6",
        "book": 21,
        "chapter": 6,
        "endChapter": 6
      }
    ],
    "passage": "Mateo 18:18–35 · Números 7–8 · Eclesiastés 6",
    "theme": "19 de marzo"
  },
  {
    "day": 79,
    "month": 3,
    "date": 20,
    "sourceReference": "Mateo 19.1-15 / Números 9-10 / Eclesiastés 7",
    "readings": [
      {
        "reference": "Mateo 19:1–15",
        "book": 40,
        "chapter": 19,
        "endChapter": 19
      },
      {
        "reference": "Números 9–10",
        "book": 4,
        "chapter": 9,
        "endChapter": 10
      },
      {
        "reference": "Eclesiastés 7",
        "book": 21,
        "chapter": 7,
        "endChapter": 7
      }
    ],
    "passage": "Mateo 19:1–15 · Números 9–10 · Eclesiastés 7",
    "theme": "20 de marzo"
  },
  {
    "day": 80,
    "month": 3,
    "date": 21,
    "sourceReference": "Mateo 19.16-30 / Números 11-12 / Eclesiastés 8",
    "readings": [
      {
        "reference": "Mateo 19:16–30",
        "book": 40,
        "chapter": 19,
        "endChapter": 19
      },
      {
        "reference": "Números 11–12",
        "book": 4,
        "chapter": 11,
        "endChapter": 12
      },
      {
        "reference": "Eclesiastés 8",
        "book": 21,
        "chapter": 8,
        "endChapter": 8
      }
    ],
    "passage": "Mateo 19:16–30 · Números 11–12 · Eclesiastés 8",
    "theme": "21 de marzo"
  },
  {
    "day": 81,
    "month": 3,
    "date": 22,
    "sourceReference": "Mateo 20.1-16 / Números 13-14 / Eclesiastés 9.1-12",
    "readings": [
      {
        "reference": "Mateo 20:1–16",
        "book": 40,
        "chapter": 20,
        "endChapter": 20
      },
      {
        "reference": "Números 13–14",
        "book": 4,
        "chapter": 13,
        "endChapter": 14
      },
      {
        "reference": "Eclesiastés 9:1–12",
        "book": 21,
        "chapter": 9,
        "endChapter": 9
      }
    ],
    "passage": "Mateo 20:1–16 · Números 13–14 · Eclesiastés 9:1–12",
    "theme": "22 de marzo"
  },
  {
    "day": 82,
    "month": 3,
    "date": 23,
    "sourceReference": "Mateo 20.17-34 / Números 15-16 / Eclesiastés 9.13-10.20",
    "readings": [
      {
        "reference": "Mateo 20:17–34",
        "book": 40,
        "chapter": 20,
        "endChapter": 20
      },
      {
        "reference": "Números 15–16",
        "book": 4,
        "chapter": 15,
        "endChapter": 16
      },
      {
        "reference": "Eclesiastés 9:13–10:20",
        "book": 21,
        "chapter": 9,
        "endChapter": 10
      }
    ],
    "passage": "Mateo 20:17–34 · Números 15–16 · Eclesiastés 9:13–10:20",
    "theme": "23 de marzo"
  },
  {
    "day": 83,
    "month": 3,
    "date": 24,
    "sourceReference": "Mateo 21.1-27 / Números 17-18 / Eclesiastés 11.1-8",
    "readings": [
      {
        "reference": "Mateo 21:1–27",
        "book": 40,
        "chapter": 21,
        "endChapter": 21
      },
      {
        "reference": "Números 17–18",
        "book": 4,
        "chapter": 17,
        "endChapter": 18
      },
      {
        "reference": "Eclesiastés 11:1–8",
        "book": 21,
        "chapter": 11,
        "endChapter": 11
      }
    ],
    "passage": "Mateo 21:1–27 · Números 17–18 · Eclesiastés 11:1–8",
    "theme": "24 de marzo"
  },
  {
    "day": 84,
    "month": 3,
    "date": 25,
    "sourceReference": "Mateo 21.28-46 / Números 19-20 / Eclesiastés 11.9-12.14",
    "readings": [
      {
        "reference": "Mateo 21:28–46",
        "book": 40,
        "chapter": 21,
        "endChapter": 21
      },
      {
        "reference": "Números 19–20",
        "book": 4,
        "chapter": 19,
        "endChapter": 20
      },
      {
        "reference": "Eclesiastés 11:9–12:14",
        "book": 21,
        "chapter": 11,
        "endChapter": 12
      }
    ],
    "passage": "Mateo 21:28–46 · Números 19–20 · Eclesiastés 11:9–12:14",
    "theme": "25 de marzo"
  },
  {
    "day": 85,
    "month": 3,
    "date": 26,
    "sourceReference": "Mateo 22.1-22 / Números 21 / Cantares 1.1-2.7",
    "readings": [
      {
        "reference": "Mateo 22:1–22",
        "book": 40,
        "chapter": 22,
        "endChapter": 22
      },
      {
        "reference": "Números 21",
        "book": 4,
        "chapter": 21,
        "endChapter": 21
      },
      {
        "reference": "Cantares 1:1–2:7",
        "book": 22,
        "chapter": 1,
        "endChapter": 2
      }
    ],
    "passage": "Mateo 22:1–22 · Números 21 · Cantares 1:1–2:7",
    "theme": "26 de marzo"
  },
  {
    "day": 86,
    "month": 3,
    "date": 27,
    "sourceReference": "Mateo 22.23-46 / Números 22.1-40 / Cantares 2.8-3.5",
    "readings": [
      {
        "reference": "Mateo 22:23–46",
        "book": 40,
        "chapter": 22,
        "endChapter": 22
      },
      {
        "reference": "Números 22:1–40",
        "book": 4,
        "chapter": 22,
        "endChapter": 22
      },
      {
        "reference": "Cantares 2:8–3:5",
        "book": 22,
        "chapter": 2,
        "endChapter": 3
      }
    ],
    "passage": "Mateo 22:23–46 · Números 22:1–40 · Cantares 2:8–3:5",
    "theme": "27 de marzo"
  },
  {
    "day": 87,
    "month": 3,
    "date": 28,
    "sourceReference": "Mateo 23.1-12 / Números 22.41-23.26 / Cantares 3.6-5.1",
    "readings": [
      {
        "reference": "Mateo 23:1–12",
        "book": 40,
        "chapter": 23,
        "endChapter": 23
      },
      {
        "reference": "Números 22:41–23:26",
        "book": 4,
        "chapter": 22,
        "endChapter": 23
      },
      {
        "reference": "Cantares 3:6–5:1",
        "book": 22,
        "chapter": 3,
        "endChapter": 5
      }
    ],
    "passage": "Mateo 23:1–12 · Números 22:41–23:26 · Cantares 3:6–5:1",
    "theme": "28 de marzo"
  },
  {
    "day": 88,
    "month": 3,
    "date": 29,
    "sourceReference": "Mateo 23.13.39 / Números 23.27-24.25 / Cantares 5.2-6.3",
    "readings": [
      {
        "reference": "Mateo 23:13–39",
        "book": 40,
        "chapter": 23,
        "endChapter": 23
      },
      {
        "reference": "Números 23:27–24:25",
        "book": 4,
        "chapter": 23,
        "endChapter": 24
      },
      {
        "reference": "Cantares 5:2–6:3",
        "book": 22,
        "chapter": 5,
        "endChapter": 6
      }
    ],
    "passage": "Mateo 23:13–39 · Números 23:27–24:25 · Cantares 5:2–6:3",
    "theme": "29 de marzo"
  },
  {
    "day": 89,
    "month": 3,
    "date": 30,
    "sourceReference": "Mateo 24.1-31 / Números 25-27 / Cantares 6.4-8.4",
    "readings": [
      {
        "reference": "Mateo 24:1–31",
        "book": 40,
        "chapter": 24,
        "endChapter": 24
      },
      {
        "reference": "Números 25–27",
        "book": 4,
        "chapter": 25,
        "endChapter": 27
      },
      {
        "reference": "Cantares 6:4–8:4",
        "book": 22,
        "chapter": 6,
        "endChapter": 8
      }
    ],
    "passage": "Mateo 24:1–31 · Números 25–27 · Cantares 6:4–8:4",
    "theme": "30 de marzo"
  },
  {
    "day": 90,
    "month": 3,
    "date": 31,
    "sourceReference": "Mateo 24.32-51 / Números 28-29 / Cantares 8.5-14",
    "readings": [
      {
        "reference": "Mateo 24:32–51",
        "book": 40,
        "chapter": 24,
        "endChapter": 24
      },
      {
        "reference": "Números 28–29",
        "book": 4,
        "chapter": 28,
        "endChapter": 29
      },
      {
        "reference": "Cantares 8:5–14",
        "book": 22,
        "chapter": 8,
        "endChapter": 8
      }
    ],
    "passage": "Mateo 24:32–51 · Números 28–29 · Cantares 8:5–14",
    "theme": "31 de marzo"
  },
  {
    "day": 91,
    "month": 4,
    "date": 1,
    "sourceReference": "Mateo 25.1-30 / Números 30-31 / Job 1",
    "readings": [
      {
        "reference": "Mateo 25:1–30",
        "book": 40,
        "chapter": 25,
        "endChapter": 25
      },
      {
        "reference": "Números 30–31",
        "book": 4,
        "chapter": 30,
        "endChapter": 31
      },
      {
        "reference": "Job 1",
        "book": 18,
        "chapter": 1,
        "endChapter": 1
      }
    ],
    "passage": "Mateo 25:1–30 · Números 30–31 · Job 1",
    "theme": "1 de abril"
  },
  {
    "day": 92,
    "month": 4,
    "date": 2,
    "sourceReference": "Mateo 25.31-46 / Números 32-34 / Job 2",
    "readings": [
      {
        "reference": "Mateo 25:31–46",
        "book": 40,
        "chapter": 25,
        "endChapter": 25
      },
      {
        "reference": "Números 32–34",
        "book": 4,
        "chapter": 32,
        "endChapter": 34
      },
      {
        "reference": "Job 2",
        "book": 18,
        "chapter": 2,
        "endChapter": 2
      }
    ],
    "passage": "Mateo 25:31–46 · Números 32–34 · Job 2",
    "theme": "2 de abril"
  },
  {
    "day": 93,
    "month": 4,
    "date": 3,
    "sourceReference": "Mateo 26.1-25 / Números 35-36 / Job 3",
    "readings": [
      {
        "reference": "Mateo 26:1–25",
        "book": 40,
        "chapter": 26,
        "endChapter": 26
      },
      {
        "reference": "Números 35–36",
        "book": 4,
        "chapter": 35,
        "endChapter": 36
      },
      {
        "reference": "Job 3",
        "book": 18,
        "chapter": 3,
        "endChapter": 3
      }
    ],
    "passage": "Mateo 26:1–25 · Números 35–36 · Job 3",
    "theme": "3 de abril"
  },
  {
    "day": 94,
    "month": 4,
    "date": 4,
    "sourceReference": "Mateo 26.26-46 / Deuteronomio 1-2 / Job 4",
    "readings": [
      {
        "reference": "Mateo 26:26–46",
        "book": 40,
        "chapter": 26,
        "endChapter": 26
      },
      {
        "reference": "Deuteronomio 1–2",
        "book": 5,
        "chapter": 1,
        "endChapter": 2
      },
      {
        "reference": "Job 4",
        "book": 18,
        "chapter": 4,
        "endChapter": 4
      }
    ],
    "passage": "Mateo 26:26–46 · Deuteronomio 1–2 · Job 4",
    "theme": "4 de abril"
  },
  {
    "day": 95,
    "month": 4,
    "date": 5,
    "sourceReference": "Mateo 26.47-75 / Deuteronomio 3-4 / Job 5",
    "readings": [
      {
        "reference": "Mateo 26:47–75",
        "book": 40,
        "chapter": 26,
        "endChapter": 26
      },
      {
        "reference": "Deuteronomio 3–4",
        "book": 5,
        "chapter": 3,
        "endChapter": 4
      },
      {
        "reference": "Job 5",
        "book": 18,
        "chapter": 5,
        "endChapter": 5
      }
    ],
    "passage": "Mateo 26:47–75 · Deuteronomio 3–4 · Job 5",
    "theme": "5 de abril"
  },
  {
    "day": 96,
    "month": 4,
    "date": 6,
    "sourceReference": "Mateo 27.1-31 / Deuteronomio 5-6 / Job 6",
    "readings": [
      {
        "reference": "Mateo 27:1–31",
        "book": 40,
        "chapter": 27,
        "endChapter": 27
      },
      {
        "reference": "Deuteronomio 5–6",
        "book": 5,
        "chapter": 5,
        "endChapter": 6
      },
      {
        "reference": "Job 6",
        "book": 18,
        "chapter": 6,
        "endChapter": 6
      }
    ],
    "passage": "Mateo 27:1–31 · Deuteronomio 5–6 · Job 6",
    "theme": "6 de abril"
  },
  {
    "day": 97,
    "month": 4,
    "date": 7,
    "sourceReference": "Mateo 27.32-66 / Deuteronomio 7-8 / Job 7",
    "readings": [
      {
        "reference": "Mateo 27:32–66",
        "book": 40,
        "chapter": 27,
        "endChapter": 27
      },
      {
        "reference": "Deuteronomio 7–8",
        "book": 5,
        "chapter": 7,
        "endChapter": 8
      },
      {
        "reference": "Job 7",
        "book": 18,
        "chapter": 7,
        "endChapter": 7
      }
    ],
    "passage": "Mateo 27:32–66 · Deuteronomio 7–8 · Job 7",
    "theme": "7 de abril"
  },
  {
    "day": 98,
    "month": 4,
    "date": 8,
    "sourceReference": "Mateo 28 / Deuteronomio 9-10 / Job 8",
    "readings": [
      {
        "reference": "Mateo 28",
        "book": 40,
        "chapter": 28,
        "endChapter": 28
      },
      {
        "reference": "Deuteronomio 9–10",
        "book": 5,
        "chapter": 9,
        "endChapter": 10
      },
      {
        "reference": "Job 8",
        "book": 18,
        "chapter": 8,
        "endChapter": 8
      }
    ],
    "passage": "Mateo 28 · Deuteronomio 9–10 · Job 8",
    "theme": "8 de abril"
  },
  {
    "day": 99,
    "month": 4,
    "date": 9,
    "sourceReference": "Hechos 1 / Deuteronomio 11-12 / Job 9",
    "readings": [
      {
        "reference": "Hechos 1",
        "book": 44,
        "chapter": 1,
        "endChapter": 1
      },
      {
        "reference": "Deuteronomio 11–12",
        "book": 5,
        "chapter": 11,
        "endChapter": 12
      },
      {
        "reference": "Job 9",
        "book": 18,
        "chapter": 9,
        "endChapter": 9
      }
    ],
    "passage": "Hechos 1 · Deuteronomio 11–12 · Job 9",
    "theme": "9 de abril"
  },
  {
    "day": 100,
    "month": 4,
    "date": 10,
    "sourceReference": "Hechos 2.1-13 / Deuteronomio 13-14 / Job 10",
    "readings": [
      {
        "reference": "Hechos 2:1–13",
        "book": 44,
        "chapter": 2,
        "endChapter": 2
      },
      {
        "reference": "Deuteronomio 13–14",
        "book": 5,
        "chapter": 13,
        "endChapter": 14
      },
      {
        "reference": "Job 10",
        "book": 18,
        "chapter": 10,
        "endChapter": 10
      }
    ],
    "passage": "Hechos 2:1–13 · Deuteronomio 13–14 · Job 10",
    "theme": "10 de abril"
  },
  {
    "day": 101,
    "month": 4,
    "date": 11,
    "sourceReference": "Hechos 2.14-47 / Deuteronomio 15-16 / Job 11",
    "readings": [
      {
        "reference": "Hechos 2:14–47",
        "book": 44,
        "chapter": 2,
        "endChapter": 2
      },
      {
        "reference": "Deuteronomio 15–16",
        "book": 5,
        "chapter": 15,
        "endChapter": 16
      },
      {
        "reference": "Job 11",
        "book": 18,
        "chapter": 11,
        "endChapter": 11
      }
    ],
    "passage": "Hechos 2:14–47 · Deuteronomio 15–16 · Job 11",
    "theme": "11 de abril"
  },
  {
    "day": 102,
    "month": 4,
    "date": 12,
    "sourceReference": "Hechos 3 / Deuteronomio 17-18 / Job 12",
    "readings": [
      {
        "reference": "Hechos 3",
        "book": 44,
        "chapter": 3,
        "endChapter": 3
      },
      {
        "reference": "Deuteronomio 17–18",
        "book": 5,
        "chapter": 17,
        "endChapter": 18
      },
      {
        "reference": "Job 12",
        "book": 18,
        "chapter": 12,
        "endChapter": 12
      }
    ],
    "passage": "Hechos 3 · Deuteronomio 17–18 · Job 12",
    "theme": "12 de abril"
  },
  {
    "day": 103,
    "month": 4,
    "date": 13,
    "sourceReference": "Hechos 4.1-22 / Deuteronomio 19-20 / Job 13",
    "readings": [
      {
        "reference": "Hechos 4:1–22",
        "book": 44,
        "chapter": 4,
        "endChapter": 4
      },
      {
        "reference": "Deuteronomio 19–20",
        "book": 5,
        "chapter": 19,
        "endChapter": 20
      },
      {
        "reference": "Job 13",
        "book": 18,
        "chapter": 13,
        "endChapter": 13
      }
    ],
    "passage": "Hechos 4:1–22 · Deuteronomio 19–20 · Job 13",
    "theme": "13 de abril"
  },
  {
    "day": 104,
    "month": 4,
    "date": 14,
    "sourceReference": "Hechos 4.23-37 / Deuteronomio 21-22 / Job 14",
    "readings": [
      {
        "reference": "Hechos 4:23–37",
        "book": 44,
        "chapter": 4,
        "endChapter": 4
      },
      {
        "reference": "Deuteronomio 21–22",
        "book": 5,
        "chapter": 21,
        "endChapter": 22
      },
      {
        "reference": "Job 14",
        "book": 18,
        "chapter": 14,
        "endChapter": 14
      }
    ],
    "passage": "Hechos 4:23–37 · Deuteronomio 21–22 · Job 14",
    "theme": "14 de abril"
  },
  {
    "day": 105,
    "month": 4,
    "date": 15,
    "sourceReference": "Hechos 5.1-16 / Deuteronomio 23-24 / Job 15",
    "readings": [
      {
        "reference": "Hechos 5:1–16",
        "book": 44,
        "chapter": 5,
        "endChapter": 5
      },
      {
        "reference": "Deuteronomio 23–24",
        "book": 5,
        "chapter": 23,
        "endChapter": 24
      },
      {
        "reference": "Job 15",
        "book": 18,
        "chapter": 15,
        "endChapter": 15
      }
    ],
    "passage": "Hechos 5:1–16 · Deuteronomio 23–24 · Job 15",
    "theme": "15 de abril"
  },
  {
    "day": 106,
    "month": 4,
    "date": 16,
    "sourceReference": "Hechos 5.17-42 / Deuteronomio 25-27 / Job 16",
    "readings": [
      {
        "reference": "Hechos 5:17–42",
        "book": 44,
        "chapter": 5,
        "endChapter": 5
      },
      {
        "reference": "Deuteronomio 25–27",
        "book": 5,
        "chapter": 25,
        "endChapter": 27
      },
      {
        "reference": "Job 16",
        "book": 18,
        "chapter": 16,
        "endChapter": 16
      }
    ],
    "passage": "Hechos 5:17–42 · Deuteronomio 25–27 · Job 16",
    "theme": "16 de abril"
  },
  {
    "day": 107,
    "month": 4,
    "date": 17,
    "sourceReference": "Hechos 6 / Deuteronomio 28 / Job 17",
    "readings": [
      {
        "reference": "Hechos 6",
        "book": 44,
        "chapter": 6,
        "endChapter": 6
      },
      {
        "reference": "Deuteronomio 28",
        "book": 5,
        "chapter": 28,
        "endChapter": 28
      },
      {
        "reference": "Job 17",
        "book": 18,
        "chapter": 17,
        "endChapter": 17
      }
    ],
    "passage": "Hechos 6 · Deuteronomio 28 · Job 17",
    "theme": "17 de abril"
  },
  {
    "day": 108,
    "month": 4,
    "date": 18,
    "sourceReference": "Hechos 7.1-22 / Deuteronomio 29-30 / Job 18",
    "readings": [
      {
        "reference": "Hechos 7:1–22",
        "book": 44,
        "chapter": 7,
        "endChapter": 7
      },
      {
        "reference": "Deuteronomio 29–30",
        "book": 5,
        "chapter": 29,
        "endChapter": 30
      },
      {
        "reference": "Job 18",
        "book": 18,
        "chapter": 18,
        "endChapter": 18
      }
    ],
    "passage": "Hechos 7:1–22 · Deuteronomio 29–30 · Job 18",
    "theme": "18 de abril"
  },
  {
    "day": 109,
    "month": 4,
    "date": 19,
    "sourceReference": "Hechos 7.23-8.1 / Deuteronomio 31-32 / Job 19",
    "readings": [
      {
        "reference": "Hechos 7:23–8:1",
        "book": 44,
        "chapter": 7,
        "endChapter": 8
      },
      {
        "reference": "Deuteronomio 31–32",
        "book": 5,
        "chapter": 31,
        "endChapter": 32
      },
      {
        "reference": "Job 19",
        "book": 18,
        "chapter": 19,
        "endChapter": 19
      }
    ],
    "passage": "Hechos 7:23–8:1 · Deuteronomio 31–32 · Job 19",
    "theme": "19 de abril"
  },
  {
    "day": 110,
    "month": 4,
    "date": 20,
    "sourceReference": "Hechos 8.2-25 / Deuteronomio 33-34 / Job 20",
    "readings": [
      {
        "reference": "Hechos 8:2–25",
        "book": 44,
        "chapter": 8,
        "endChapter": 8
      },
      {
        "reference": "Deuteronomio 33–34",
        "book": 5,
        "chapter": 33,
        "endChapter": 34
      },
      {
        "reference": "Job 20",
        "book": 18,
        "chapter": 20,
        "endChapter": 20
      }
    ],
    "passage": "Hechos 8:2–25 · Deuteronomio 33–34 · Job 20",
    "theme": "20 de abril"
  },
  {
    "day": 111,
    "month": 4,
    "date": 21,
    "sourceReference": "Hechos 8.26-40 / Josué 1-2 / Job 21",
    "readings": [
      {
        "reference": "Hechos 8:26–40",
        "book": 44,
        "chapter": 8,
        "endChapter": 8
      },
      {
        "reference": "Josué 1–2",
        "book": 6,
        "chapter": 1,
        "endChapter": 2
      },
      {
        "reference": "Job 21",
        "book": 18,
        "chapter": 21,
        "endChapter": 21
      }
    ],
    "passage": "Hechos 8:26–40 · Josué 1–2 · Job 21",
    "theme": "21 de abril"
  },
  {
    "day": 112,
    "month": 4,
    "date": 22,
    "sourceReference": "Hechos 9.1-25 / Josué 3.1-5.1 / Job 22",
    "readings": [
      {
        "reference": "Hechos 9:1–25",
        "book": 44,
        "chapter": 9,
        "endChapter": 9
      },
      {
        "reference": "Josué 3:1–5:1",
        "book": 6,
        "chapter": 3,
        "endChapter": 5
      },
      {
        "reference": "Job 22",
        "book": 18,
        "chapter": 22,
        "endChapter": 22
      }
    ],
    "passage": "Hechos 9:1–25 · Josué 3:1–5:1 · Job 22",
    "theme": "22 de abril"
  },
  {
    "day": 113,
    "month": 4,
    "date": 23,
    "sourceReference": "Hechos 9.26-43 / Josué 5.2-6.27 / Job 23",
    "readings": [
      {
        "reference": "Hechos 9:26–43",
        "book": 44,
        "chapter": 9,
        "endChapter": 9
      },
      {
        "reference": "Josué 5:2–6:27",
        "book": 6,
        "chapter": 5,
        "endChapter": 6
      },
      {
        "reference": "Job 23",
        "book": 18,
        "chapter": 23,
        "endChapter": 23
      }
    ],
    "passage": "Hechos 9:26–43 · Josué 5:2–6:27 · Job 23",
    "theme": "23 de abril"
  },
  {
    "day": 114,
    "month": 4,
    "date": 24,
    "sourceReference": "Hechos 10.1-33 / Josué 7-8 / Job 24",
    "readings": [
      {
        "reference": "Hechos 10:1–33",
        "book": 44,
        "chapter": 10,
        "endChapter": 10
      },
      {
        "reference": "Josué 7–8",
        "book": 6,
        "chapter": 7,
        "endChapter": 8
      },
      {
        "reference": "Job 24",
        "book": 18,
        "chapter": 24,
        "endChapter": 24
      }
    ],
    "passage": "Hechos 10:1–33 · Josué 7–8 · Job 24",
    "theme": "24 de abril"
  },
  {
    "day": 115,
    "month": 4,
    "date": 25,
    "sourceReference": "Hechos 10.34-48 / Josué 9-10 / Job 25",
    "readings": [
      {
        "reference": "Hechos 10:34–48",
        "book": 44,
        "chapter": 10,
        "endChapter": 10
      },
      {
        "reference": "Josué 9–10",
        "book": 6,
        "chapter": 9,
        "endChapter": 10
      },
      {
        "reference": "Job 25",
        "book": 18,
        "chapter": 25,
        "endChapter": 25
      }
    ],
    "passage": "Hechos 10:34–48 · Josué 9–10 · Job 25",
    "theme": "25 de abril"
  },
  {
    "day": 116,
    "month": 4,
    "date": 26,
    "sourceReference": "Hechos 11.1-18 / Josué 11-12 / Job 26",
    "readings": [
      {
        "reference": "Hechos 11:1–18",
        "book": 44,
        "chapter": 11,
        "endChapter": 11
      },
      {
        "reference": "Josué 11–12",
        "book": 6,
        "chapter": 11,
        "endChapter": 12
      },
      {
        "reference": "Job 26",
        "book": 18,
        "chapter": 26,
        "endChapter": 26
      }
    ],
    "passage": "Hechos 11:1–18 · Josué 11–12 · Job 26",
    "theme": "26 de abril"
  },
  {
    "day": 117,
    "month": 4,
    "date": 27,
    "sourceReference": "Hechos 11.19-30 / Josué 13-14 / Job 27",
    "readings": [
      {
        "reference": "Hechos 11:19–30",
        "book": 44,
        "chapter": 11,
        "endChapter": 11
      },
      {
        "reference": "Josué 13–14",
        "book": 6,
        "chapter": 13,
        "endChapter": 14
      },
      {
        "reference": "Job 27",
        "book": 18,
        "chapter": 27,
        "endChapter": 27
      }
    ],
    "passage": "Hechos 11:19–30 · Josué 13–14 · Job 27",
    "theme": "27 de abril"
  },
  {
    "day": 118,
    "month": 4,
    "date": 28,
    "sourceReference": "Hechos 12 / Josué 15-17 / Job 28",
    "readings": [
      {
        "reference": "Hechos 12",
        "book": 44,
        "chapter": 12,
        "endChapter": 12
      },
      {
        "reference": "Josué 15–17",
        "book": 6,
        "chapter": 15,
        "endChapter": 17
      },
      {
        "reference": "Job 28",
        "book": 18,
        "chapter": 28,
        "endChapter": 28
      }
    ],
    "passage": "Hechos 12 · Josué 15–17 · Job 28",
    "theme": "28 de abril"
  },
  {
    "day": 119,
    "month": 4,
    "date": 29,
    "sourceReference": "Hechos 13.1-25 / Josué 18-19 / Job 29",
    "readings": [
      {
        "reference": "Hechos 13:1–25",
        "book": 44,
        "chapter": 13,
        "endChapter": 13
      },
      {
        "reference": "Josué 18–19",
        "book": 6,
        "chapter": 18,
        "endChapter": 19
      },
      {
        "reference": "Job 29",
        "book": 18,
        "chapter": 29,
        "endChapter": 29
      }
    ],
    "passage": "Hechos 13:1–25 · Josué 18–19 · Job 29",
    "theme": "29 de abril"
  },
  {
    "day": 120,
    "month": 4,
    "date": 30,
    "sourceReference": "Hechos 13.26-52 / Josué 20-21 / Job 30",
    "readings": [
      {
        "reference": "Hechos 13:26–52",
        "book": 44,
        "chapter": 13,
        "endChapter": 13
      },
      {
        "reference": "Josué 20–21",
        "book": 6,
        "chapter": 20,
        "endChapter": 21
      },
      {
        "reference": "Job 30",
        "book": 18,
        "chapter": 30,
        "endChapter": 30
      }
    ],
    "passage": "Hechos 13:26–52 · Josué 20–21 · Job 30",
    "theme": "30 de abril"
  },
  {
    "day": 121,
    "month": 5,
    "date": 1,
    "sourceReference": "Hechos 14 / Josué 22 / Job 31",
    "readings": [
      {
        "reference": "Hechos 14",
        "book": 44,
        "chapter": 14,
        "endChapter": 14
      },
      {
        "reference": "Josué 22",
        "book": 6,
        "chapter": 22,
        "endChapter": 22
      },
      {
        "reference": "Job 31",
        "book": 18,
        "chapter": 31,
        "endChapter": 31
      }
    ],
    "passage": "Hechos 14 · Josué 22 · Job 31",
    "theme": "1 de mayo"
  },
  {
    "day": 122,
    "month": 5,
    "date": 2,
    "sourceReference": "Hechos 15.1-21 / Josué 23-24 / Job 32",
    "readings": [
      {
        "reference": "Hechos 15:1–21",
        "book": 44,
        "chapter": 15,
        "endChapter": 15
      },
      {
        "reference": "Josué 23–24",
        "book": 6,
        "chapter": 23,
        "endChapter": 24
      },
      {
        "reference": "Job 32",
        "book": 18,
        "chapter": 32,
        "endChapter": 32
      }
    ],
    "passage": "Hechos 15:1–21 · Josué 23–24 · Job 32",
    "theme": "2 de mayo"
  },
  {
    "day": 123,
    "month": 5,
    "date": 3,
    "sourceReference": "Hechos 15.22-41 / Jueces 1 / Job 33",
    "readings": [
      {
        "reference": "Hechos 15:22–41",
        "book": 44,
        "chapter": 15,
        "endChapter": 15
      },
      {
        "reference": "Jueces 1",
        "book": 7,
        "chapter": 1,
        "endChapter": 1
      },
      {
        "reference": "Job 33",
        "book": 18,
        "chapter": 33,
        "endChapter": 33
      }
    ],
    "passage": "Hechos 15:22–41 · Jueces 1 · Job 33",
    "theme": "3 de mayo"
  },
  {
    "day": 124,
    "month": 5,
    "date": 4,
    "sourceReference": "Hechos 16.1-15 / Jueces 2-3 / Job 34",
    "readings": [
      {
        "reference": "Hechos 16:1–15",
        "book": 44,
        "chapter": 16,
        "endChapter": 16
      },
      {
        "reference": "Jueces 2–3",
        "book": 7,
        "chapter": 2,
        "endChapter": 3
      },
      {
        "reference": "Job 34",
        "book": 18,
        "chapter": 34,
        "endChapter": 34
      }
    ],
    "passage": "Hechos 16:1–15 · Jueces 2–3 · Job 34",
    "theme": "4 de mayo"
  },
  {
    "day": 125,
    "month": 5,
    "date": 5,
    "sourceReference": "Hechos 16.16-40 / Jueces 4-5 / Job 35",
    "readings": [
      {
        "reference": "Hechos 16:16–40",
        "book": 44,
        "chapter": 16,
        "endChapter": 16
      },
      {
        "reference": "Jueces 4–5",
        "book": 7,
        "chapter": 4,
        "endChapter": 5
      },
      {
        "reference": "Job 35",
        "book": 18,
        "chapter": 35,
        "endChapter": 35
      }
    ],
    "passage": "Hechos 16:16–40 · Jueces 4–5 · Job 35",
    "theme": "5 de mayo"
  },
  {
    "day": 126,
    "month": 5,
    "date": 6,
    "sourceReference": "Hechos 17.1-15 / Jueces 6 / Job 36",
    "readings": [
      {
        "reference": "Hechos 17:1–15",
        "book": 44,
        "chapter": 17,
        "endChapter": 17
      },
      {
        "reference": "Jueces 6",
        "book": 7,
        "chapter": 6,
        "endChapter": 6
      },
      {
        "reference": "Job 36",
        "book": 18,
        "chapter": 36,
        "endChapter": 36
      }
    ],
    "passage": "Hechos 17:1–15 · Jueces 6 · Job 36",
    "theme": "6 de mayo"
  },
  {
    "day": 127,
    "month": 5,
    "date": 7,
    "sourceReference": "Hechos 17.16-34 / Jueces 7-8 / Job 37",
    "readings": [
      {
        "reference": "Hechos 17:16–34",
        "book": 44,
        "chapter": 17,
        "endChapter": 17
      },
      {
        "reference": "Jueces 7–8",
        "book": 7,
        "chapter": 7,
        "endChapter": 8
      },
      {
        "reference": "Job 37",
        "book": 18,
        "chapter": 37,
        "endChapter": 37
      }
    ],
    "passage": "Hechos 17:16–34 · Jueces 7–8 · Job 37",
    "theme": "7 de mayo"
  },
  {
    "day": 128,
    "month": 5,
    "date": 8,
    "sourceReference": "Hechos 18 / Jueces 9 / Job 38",
    "readings": [
      {
        "reference": "Hechos 18",
        "book": 44,
        "chapter": 18,
        "endChapter": 18
      },
      {
        "reference": "Jueces 9",
        "book": 7,
        "chapter": 9,
        "endChapter": 9
      },
      {
        "reference": "Job 38",
        "book": 18,
        "chapter": 38,
        "endChapter": 38
      }
    ],
    "passage": "Hechos 18 · Jueces 9 · Job 38",
    "theme": "8 de mayo"
  },
  {
    "day": 129,
    "month": 5,
    "date": 9,
    "sourceReference": "Hechos 19.1-20 / Jueces 10.1-11.33 / Job 39",
    "readings": [
      {
        "reference": "Hechos 19:1–20",
        "book": 44,
        "chapter": 19,
        "endChapter": 19
      },
      {
        "reference": "Jueces 10:1–11:33",
        "book": 7,
        "chapter": 10,
        "endChapter": 11
      },
      {
        "reference": "Job 39",
        "book": 18,
        "chapter": 39,
        "endChapter": 39
      }
    ],
    "passage": "Hechos 19:1–20 · Jueces 10:1–11:33 · Job 39",
    "theme": "9 de mayo"
  },
  {
    "day": 130,
    "month": 5,
    "date": 10,
    "sourceReference": "Hechos 19.21-41 / Jueces 11.34-12.15 / Job 40",
    "readings": [
      {
        "reference": "Hechos 19:21–41",
        "book": 44,
        "chapter": 19,
        "endChapter": 19
      },
      {
        "reference": "Jueces 11:34–12:15",
        "book": 7,
        "chapter": 11,
        "endChapter": 12
      },
      {
        "reference": "Job 40",
        "book": 18,
        "chapter": 40,
        "endChapter": 40
      }
    ],
    "passage": "Hechos 19:21–41 · Jueces 11:34–12:15 · Job 40",
    "theme": "10 de mayo"
  },
  {
    "day": 131,
    "month": 5,
    "date": 11,
    "sourceReference": "Hechos 20.1-16 / Jueces 13 / Job 41",
    "readings": [
      {
        "reference": "Hechos 20:1–16",
        "book": 44,
        "chapter": 20,
        "endChapter": 20
      },
      {
        "reference": "Jueces 13",
        "book": 7,
        "chapter": 13,
        "endChapter": 13
      },
      {
        "reference": "Job 41",
        "book": 18,
        "chapter": 41,
        "endChapter": 41
      }
    ],
    "passage": "Hechos 20:1–16 · Jueces 13 · Job 41",
    "theme": "11 de mayo"
  },
  {
    "day": 132,
    "month": 5,
    "date": 12,
    "sourceReference": "Hechos 20.17-38 / Jueces 14-15 / Job 42",
    "readings": [
      {
        "reference": "Hechos 20:17–38",
        "book": 44,
        "chapter": 20,
        "endChapter": 20
      },
      {
        "reference": "Jueces 14–15",
        "book": 7,
        "chapter": 14,
        "endChapter": 15
      },
      {
        "reference": "Job 42",
        "book": 18,
        "chapter": 42,
        "endChapter": 42
      }
    ],
    "passage": "Hechos 20:17–38 · Jueces 14–15 · Job 42",
    "theme": "12 de mayo"
  },
  {
    "day": 133,
    "month": 5,
    "date": 13,
    "sourceReference": "Hechos 21.1-36 / Jueces 16 / Salmos 42",
    "readings": [
      {
        "reference": "Hechos 21:1–36",
        "book": 44,
        "chapter": 21,
        "endChapter": 21
      },
      {
        "reference": "Jueces 16",
        "book": 7,
        "chapter": 16,
        "endChapter": 16
      },
      {
        "reference": "Salmos 42",
        "book": 19,
        "chapter": 42,
        "endChapter": 42
      }
    ],
    "passage": "Hechos 21:1–36 · Jueces 16 · Salmos 42",
    "theme": "13 de mayo"
  },
  {
    "day": 134,
    "month": 5,
    "date": 14,
    "sourceReference": "Hechos 21.37-22.29 / Jueces 17-18 / Salmos 43",
    "readings": [
      {
        "reference": "Hechos 21:37–22:29",
        "book": 44,
        "chapter": 21,
        "endChapter": 22
      },
      {
        "reference": "Jueces 17–18",
        "book": 7,
        "chapter": 17,
        "endChapter": 18
      },
      {
        "reference": "Salmos 43",
        "book": 19,
        "chapter": 43,
        "endChapter": 43
      }
    ],
    "passage": "Hechos 21:37–22:29 · Jueces 17–18 · Salmos 43",
    "theme": "14 de mayo"
  },
  {
    "day": 135,
    "month": 5,
    "date": 15,
    "sourceReference": "Hechos 22.30-23.22 / Jueces 19 / Salmos 44",
    "readings": [
      {
        "reference": "Hechos 22:30–23:22",
        "book": 44,
        "chapter": 22,
        "endChapter": 23
      },
      {
        "reference": "Jueces 19",
        "book": 7,
        "chapter": 19,
        "endChapter": 19
      },
      {
        "reference": "Salmos 44",
        "book": 19,
        "chapter": 44,
        "endChapter": 44
      }
    ],
    "passage": "Hechos 22:30–23:22 · Jueces 19 · Salmos 44",
    "theme": "15 de mayo"
  },
  {
    "day": 136,
    "month": 5,
    "date": 16,
    "sourceReference": "Hechos 23.23-24.9 / Jueces 20 / Salmos 45",
    "readings": [
      {
        "reference": "Hechos 23:23–24:9",
        "book": 44,
        "chapter": 23,
        "endChapter": 24
      },
      {
        "reference": "Jueces 20",
        "book": 7,
        "chapter": 20,
        "endChapter": 20
      },
      {
        "reference": "Salmos 45",
        "book": 19,
        "chapter": 45,
        "endChapter": 45
      }
    ],
    "passage": "Hechos 23:23–24:9 · Jueces 20 · Salmos 45",
    "theme": "16 de mayo"
  },
  {
    "day": 137,
    "month": 5,
    "date": 17,
    "sourceReference": "Hechos 24.10-27 / Jueces 21 / Salmos 46",
    "readings": [
      {
        "reference": "Hechos 24:10–27",
        "book": 44,
        "chapter": 24,
        "endChapter": 24
      },
      {
        "reference": "Jueces 21",
        "book": 7,
        "chapter": 21,
        "endChapter": 21
      },
      {
        "reference": "Salmos 46",
        "book": 19,
        "chapter": 46,
        "endChapter": 46
      }
    ],
    "passage": "Hechos 24:10–27 · Jueces 21 · Salmos 46",
    "theme": "17 de mayo"
  },
  {
    "day": 138,
    "month": 5,
    "date": 18,
    "sourceReference": "Hechos 25 / Rut 1-2 / Salmos 47",
    "readings": [
      {
        "reference": "Hechos 25",
        "book": 44,
        "chapter": 25,
        "endChapter": 25
      },
      {
        "reference": "Rut 1–2",
        "book": 8,
        "chapter": 1,
        "endChapter": 2
      },
      {
        "reference": "Salmos 47",
        "book": 19,
        "chapter": 47,
        "endChapter": 47
      }
    ],
    "passage": "Hechos 25 · Rut 1–2 · Salmos 47",
    "theme": "18 de mayo"
  },
  {
    "day": 139,
    "month": 5,
    "date": 19,
    "sourceReference": "Hechos 26.1-18 / Rut 3-4 / Salmos 48",
    "readings": [
      {
        "reference": "Hechos 26:1–18",
        "book": 44,
        "chapter": 26,
        "endChapter": 26
      },
      {
        "reference": "Rut 3–4",
        "book": 8,
        "chapter": 3,
        "endChapter": 4
      },
      {
        "reference": "Salmos 48",
        "book": 19,
        "chapter": 48,
        "endChapter": 48
      }
    ],
    "passage": "Hechos 26:1–18 · Rut 3–4 · Salmos 48",
    "theme": "19 de mayo"
  },
  {
    "day": 140,
    "month": 5,
    "date": 20,
    "sourceReference": "Hechos 26.19-32 / 1 Samuel 1.1-2.11 / Salmos 49",
    "readings": [
      {
        "reference": "Hechos 26:19–32",
        "book": 44,
        "chapter": 26,
        "endChapter": 26
      },
      {
        "reference": "1 Samuel 1:1–2:11",
        "book": 9,
        "chapter": 1,
        "endChapter": 2
      },
      {
        "reference": "Salmos 49",
        "book": 19,
        "chapter": 49,
        "endChapter": 49
      }
    ],
    "passage": "Hechos 26:19–32 · 1 Samuel 1:1–2:11 · Salmos 49",
    "theme": "20 de mayo"
  },
  {
    "day": 141,
    "month": 5,
    "date": 21,
    "sourceReference": "Hechos 27.1-12 / 1 Samuel 2.12-36 / Salmos 50",
    "readings": [
      {
        "reference": "Hechos 27:1–12",
        "book": 44,
        "chapter": 27,
        "endChapter": 27
      },
      {
        "reference": "1 Samuel 2:12–36",
        "book": 9,
        "chapter": 2,
        "endChapter": 2
      },
      {
        "reference": "Salmos 50",
        "book": 19,
        "chapter": 50,
        "endChapter": 50
      }
    ],
    "passage": "Hechos 27:1–12 · 1 Samuel 2:12–36 · Salmos 50",
    "theme": "21 de mayo"
  },
  {
    "day": 142,
    "month": 5,
    "date": 22,
    "sourceReference": "Hechos 27. 13-44 / 1 Samuel 3 / Salmos 51",
    "readings": [
      {
        "reference": "Hechos 27:13–44",
        "book": 44,
        "chapter": 27,
        "endChapter": 27
      },
      {
        "reference": "1 Samuel 3",
        "book": 9,
        "chapter": 3,
        "endChapter": 3
      },
      {
        "reference": "Salmos 51",
        "book": 19,
        "chapter": 51,
        "endChapter": 51
      }
    ],
    "passage": "Hechos 27:13–44 · 1 Samuel 3 · Salmos 51",
    "theme": "22 de mayo"
  },
  {
    "day": 143,
    "month": 5,
    "date": 23,
    "sourceReference": "Hechos 28.1-15 / 1 Samuel 4-5 / Salmos 52",
    "readings": [
      {
        "reference": "Hechos 28:1–15",
        "book": 44,
        "chapter": 28,
        "endChapter": 28
      },
      {
        "reference": "1 Samuel 4–5",
        "book": 9,
        "chapter": 4,
        "endChapter": 5
      },
      {
        "reference": "Salmos 52",
        "book": 19,
        "chapter": 52,
        "endChapter": 52
      }
    ],
    "passage": "Hechos 28:1–15 · 1 Samuel 4–5 · Salmos 52",
    "theme": "23 de mayo"
  },
  {
    "day": 144,
    "month": 5,
    "date": 24,
    "sourceReference": "Hechos 28.16-31 / 1 Samuel 6-7 / Salmos 53",
    "readings": [
      {
        "reference": "Hechos 28:16–31",
        "book": 44,
        "chapter": 28,
        "endChapter": 28
      },
      {
        "reference": "1 Samuel 6–7",
        "book": 9,
        "chapter": 6,
        "endChapter": 7
      },
      {
        "reference": "Salmos 53",
        "book": 19,
        "chapter": 53,
        "endChapter": 53
      }
    ],
    "passage": "Hechos 28:16–31 · 1 Samuel 6–7 · Salmos 53",
    "theme": "24 de mayo"
  },
  {
    "day": 145,
    "month": 5,
    "date": 25,
    "sourceReference": "Romanos 1.1-15 / 1 Samuel 8 / Salmos 54",
    "readings": [
      {
        "reference": "Romanos 1:1–15",
        "book": 45,
        "chapter": 1,
        "endChapter": 1
      },
      {
        "reference": "1 Samuel 8",
        "book": 9,
        "chapter": 8,
        "endChapter": 8
      },
      {
        "reference": "Salmos 54",
        "book": 19,
        "chapter": 54,
        "endChapter": 54
      }
    ],
    "passage": "Romanos 1:1–15 · 1 Samuel 8 · Salmos 54",
    "theme": "25 de mayo"
  },
  {
    "day": 146,
    "month": 5,
    "date": 26,
    "sourceReference": "Romanos 1.16-32 / 1 Samuel 9.1-10.16 / Salmos 55",
    "readings": [
      {
        "reference": "Romanos 1:16–32",
        "book": 45,
        "chapter": 1,
        "endChapter": 1
      },
      {
        "reference": "1 Samuel 9:1–10:16",
        "book": 9,
        "chapter": 9,
        "endChapter": 10
      },
      {
        "reference": "Salmos 55",
        "book": 19,
        "chapter": 55,
        "endChapter": 55
      }
    ],
    "passage": "Romanos 1:16–32 · 1 Samuel 9:1–10:16 · Salmos 55",
    "theme": "26 de mayo"
  },
  {
    "day": 147,
    "month": 5,
    "date": 27,
    "sourceReference": "Romanos 2.1-3.8 / 1 Samuel 10.17-11.15 / Salmos 56",
    "readings": [
      {
        "reference": "Romanos 2:1–3:8",
        "book": 45,
        "chapter": 2,
        "endChapter": 3
      },
      {
        "reference": "1 Samuel 10:17–11:15",
        "book": 9,
        "chapter": 10,
        "endChapter": 11
      },
      {
        "reference": "Salmos 56",
        "book": 19,
        "chapter": 56,
        "endChapter": 56
      }
    ],
    "passage": "Romanos 2:1–3:8 · 1 Samuel 10:17–11:15 · Salmos 56",
    "theme": "27 de mayo"
  },
  {
    "day": 148,
    "month": 5,
    "date": 28,
    "sourceReference": "Romanos 3.9-31 / 1 Samuel 12 / Salmos 57",
    "readings": [
      {
        "reference": "Romanos 3:9–31",
        "book": 45,
        "chapter": 3,
        "endChapter": 3
      },
      {
        "reference": "1 Samuel 12",
        "book": 9,
        "chapter": 12,
        "endChapter": 12
      },
      {
        "reference": "Salmos 57",
        "book": 19,
        "chapter": 57,
        "endChapter": 57
      }
    ],
    "passage": "Romanos 3:9–31 · 1 Samuel 12 · Salmos 57",
    "theme": "28 de mayo"
  },
  {
    "day": 149,
    "month": 5,
    "date": 29,
    "sourceReference": "Romanos 4 / 1 Samuel 13 / Salmos 58",
    "readings": [
      {
        "reference": "Romanos 4",
        "book": 45,
        "chapter": 4,
        "endChapter": 4
      },
      {
        "reference": "1 Samuel 13",
        "book": 9,
        "chapter": 13,
        "endChapter": 13
      },
      {
        "reference": "Salmos 58",
        "book": 19,
        "chapter": 58,
        "endChapter": 58
      }
    ],
    "passage": "Romanos 4 · 1 Samuel 13 · Salmos 58",
    "theme": "29 de mayo"
  },
  {
    "day": 150,
    "month": 5,
    "date": 30,
    "sourceReference": "Romanos 5 / 1 Samuel 14 / Salmos 59",
    "readings": [
      {
        "reference": "Romanos 5",
        "book": 45,
        "chapter": 5,
        "endChapter": 5
      },
      {
        "reference": "1 Samuel 14",
        "book": 9,
        "chapter": 14,
        "endChapter": 14
      },
      {
        "reference": "Salmos 59",
        "book": 19,
        "chapter": 59,
        "endChapter": 59
      }
    ],
    "passage": "Romanos 5 · 1 Samuel 14 · Salmos 59",
    "theme": "30 de mayo"
  },
  {
    "day": 151,
    "month": 5,
    "date": 31,
    "sourceReference": "Romanos 6 / 1 Samuel 15 / Salmos 60",
    "readings": [
      {
        "reference": "Romanos 6",
        "book": 45,
        "chapter": 6,
        "endChapter": 6
      },
      {
        "reference": "1 Samuel 15",
        "book": 9,
        "chapter": 15,
        "endChapter": 15
      },
      {
        "reference": "Salmos 60",
        "book": 19,
        "chapter": 60,
        "endChapter": 60
      }
    ],
    "passage": "Romanos 6 · 1 Samuel 15 · Salmos 60",
    "theme": "31 de mayo"
  },
  {
    "day": 152,
    "month": 6,
    "date": 1,
    "sourceReference": "Romanos 7 / 1 Samuel 16 / Salmos 61",
    "readings": [
      {
        "reference": "Romanos 7",
        "book": 45,
        "chapter": 7,
        "endChapter": 7
      },
      {
        "reference": "1 Samuel 16",
        "book": 9,
        "chapter": 16,
        "endChapter": 16
      },
      {
        "reference": "Salmos 61",
        "book": 19,
        "chapter": 61,
        "endChapter": 61
      }
    ],
    "passage": "Romanos 7 · 1 Samuel 16 · Salmos 61",
    "theme": "1 de junio"
  },
  {
    "day": 153,
    "month": 6,
    "date": 2,
    "sourceReference": "Romanos 8 / 1 Samuel 17.1-54 / Salmos 62",
    "readings": [
      {
        "reference": "Romanos 8",
        "book": 45,
        "chapter": 8,
        "endChapter": 8
      },
      {
        "reference": "1 Samuel 17:1–54",
        "book": 9,
        "chapter": 17,
        "endChapter": 17
      },
      {
        "reference": "Salmos 62",
        "book": 19,
        "chapter": 62,
        "endChapter": 62
      }
    ],
    "passage": "Romanos 8 · 1 Samuel 17:1–54 · Salmos 62",
    "theme": "2 de junio"
  },
  {
    "day": 154,
    "month": 6,
    "date": 3,
    "sourceReference": "Romanos 9.1-29 / 1 Samuel 17.55-18.30 / Salmos 63",
    "readings": [
      {
        "reference": "Romanos 9:1–29",
        "book": 45,
        "chapter": 9,
        "endChapter": 9
      },
      {
        "reference": "1 Samuel 17:55–18:30",
        "book": 9,
        "chapter": 17,
        "endChapter": 18
      },
      {
        "reference": "Salmos 63",
        "book": 19,
        "chapter": 63,
        "endChapter": 63
      }
    ],
    "passage": "Romanos 9:1–29 · 1 Samuel 17:55–18:30 · Salmos 63",
    "theme": "3 de junio"
  },
  {
    "day": 155,
    "month": 6,
    "date": 4,
    "sourceReference": "Romanos 9.30-10.21 / 1 Samuel 19 / Salmos 64",
    "readings": [
      {
        "reference": "Romanos 9:30–10:21",
        "book": 45,
        "chapter": 9,
        "endChapter": 10
      },
      {
        "reference": "1 Samuel 19",
        "book": 9,
        "chapter": 19,
        "endChapter": 19
      },
      {
        "reference": "Salmos 64",
        "book": 19,
        "chapter": 64,
        "endChapter": 64
      }
    ],
    "passage": "Romanos 9:30–10:21 · 1 Samuel 19 · Salmos 64",
    "theme": "4 de junio"
  },
  {
    "day": 156,
    "month": 6,
    "date": 5,
    "sourceReference": "Romanos 11.1-24 / 1 Samuel 20 / Salmos 65",
    "readings": [
      {
        "reference": "Romanos 11:1–24",
        "book": 45,
        "chapter": 11,
        "endChapter": 11
      },
      {
        "reference": "1 Samuel 20",
        "book": 9,
        "chapter": 20,
        "endChapter": 20
      },
      {
        "reference": "Salmos 65",
        "book": 19,
        "chapter": 65,
        "endChapter": 65
      }
    ],
    "passage": "Romanos 11:1–24 · 1 Samuel 20 · Salmos 65",
    "theme": "5 de junio"
  },
  {
    "day": 157,
    "month": 6,
    "date": 6,
    "sourceReference": "Romanos 11.25-36 / 1 Samuel 21-22 / Salmos 66",
    "readings": [
      {
        "reference": "Romanos 11:25–36",
        "book": 45,
        "chapter": 11,
        "endChapter": 11
      },
      {
        "reference": "1 Samuel 21–22",
        "book": 9,
        "chapter": 21,
        "endChapter": 22
      },
      {
        "reference": "Salmos 66",
        "book": 19,
        "chapter": 66,
        "endChapter": 66
      }
    ],
    "passage": "Romanos 11:25–36 · 1 Samuel 21–22 · Salmos 66",
    "theme": "6 de junio"
  },
  {
    "day": 158,
    "month": 6,
    "date": 7,
    "sourceReference": "Romanos 12 / 1 Samuel 23-24 / Salmos 67",
    "readings": [
      {
        "reference": "Romanos 12",
        "book": 45,
        "chapter": 12,
        "endChapter": 12
      },
      {
        "reference": "1 Samuel 23–24",
        "book": 9,
        "chapter": 23,
        "endChapter": 24
      },
      {
        "reference": "Salmos 67",
        "book": 19,
        "chapter": 67,
        "endChapter": 67
      }
    ],
    "passage": "Romanos 12 · 1 Samuel 23–24 · Salmos 67",
    "theme": "7 de junio"
  },
  {
    "day": 159,
    "month": 6,
    "date": 8,
    "sourceReference": "Romanos 13 / 1 Samuel 25 / Salmos 68",
    "readings": [
      {
        "reference": "Romanos 13",
        "book": 45,
        "chapter": 13,
        "endChapter": 13
      },
      {
        "reference": "1 Samuel 25",
        "book": 9,
        "chapter": 25,
        "endChapter": 25
      },
      {
        "reference": "Salmos 68",
        "book": 19,
        "chapter": 68,
        "endChapter": 68
      }
    ],
    "passage": "Romanos 13 · 1 Samuel 25 · Salmos 68",
    "theme": "8 de junio"
  },
  {
    "day": 160,
    "month": 6,
    "date": 9,
    "sourceReference": "Romanos 14 / 1 Samuel 26 / Salmos 69",
    "readings": [
      {
        "reference": "Romanos 14",
        "book": 45,
        "chapter": 14,
        "endChapter": 14
      },
      {
        "reference": "1 Samuel 26",
        "book": 9,
        "chapter": 26,
        "endChapter": 26
      },
      {
        "reference": "Salmos 69",
        "book": 19,
        "chapter": 69,
        "endChapter": 69
      }
    ],
    "passage": "Romanos 14 · 1 Samuel 26 · Salmos 69",
    "theme": "9 de junio"
  },
  {
    "day": 161,
    "month": 6,
    "date": 10,
    "sourceReference": "Romanos 15.1-13 / 1 Samuel 27-28 / Salmos 70",
    "readings": [
      {
        "reference": "Romanos 15:1–13",
        "book": 45,
        "chapter": 15,
        "endChapter": 15
      },
      {
        "reference": "1 Samuel 27–28",
        "book": 9,
        "chapter": 27,
        "endChapter": 28
      },
      {
        "reference": "Salmos 70",
        "book": 19,
        "chapter": 70,
        "endChapter": 70
      }
    ],
    "passage": "Romanos 15:1–13 · 1 Samuel 27–28 · Salmos 70",
    "theme": "10 de junio"
  },
  {
    "day": 162,
    "month": 6,
    "date": 11,
    "sourceReference": "Romanos 15.14-33 / 1 Samuel 29-31 / Salmos 71",
    "readings": [
      {
        "reference": "Romanos 15:14–33",
        "book": 45,
        "chapter": 15,
        "endChapter": 15
      },
      {
        "reference": "1 Samuel 29–31",
        "book": 9,
        "chapter": 29,
        "endChapter": 31
      },
      {
        "reference": "Salmos 71",
        "book": 19,
        "chapter": 71,
        "endChapter": 71
      }
    ],
    "passage": "Romanos 15:14–33 · 1 Samuel 29–31 · Salmos 71",
    "theme": "11 de junio"
  },
  {
    "day": 163,
    "month": 6,
    "date": 12,
    "sourceReference": "Romanos 16 / 2 Samuel 1 / Salmos 72",
    "readings": [
      {
        "reference": "Romanos 16",
        "book": 45,
        "chapter": 16,
        "endChapter": 16
      },
      {
        "reference": "2 Samuel 1",
        "book": 10,
        "chapter": 1,
        "endChapter": 1
      },
      {
        "reference": "Salmos 72",
        "book": 19,
        "chapter": 72,
        "endChapter": 72
      }
    ],
    "passage": "Romanos 16 · 2 Samuel 1 · Salmos 72",
    "theme": "12 de junio"
  },
  {
    "day": 164,
    "month": 6,
    "date": 13,
    "sourceReference": "Marcos 1.1-20 / 2 Samuel 2.1-3.1 / Daniel 1",
    "readings": [
      {
        "reference": "Marcos 1:1–20",
        "book": 41,
        "chapter": 1,
        "endChapter": 1
      },
      {
        "reference": "2 Samuel 2:1–3:1",
        "book": 10,
        "chapter": 2,
        "endChapter": 3
      },
      {
        "reference": "Daniel 1",
        "book": 27,
        "chapter": 1,
        "endChapter": 1
      }
    ],
    "passage": "Marcos 1:1–20 · 2 Samuel 2:1–3:1 · Daniel 1",
    "theme": "13 de junio"
  },
  {
    "day": 165,
    "month": 6,
    "date": 14,
    "sourceReference": "Marcos 1.21-45 / 2 Samuel 3.2-39 / Daniel 2.1-23",
    "readings": [
      {
        "reference": "Marcos 1:21–45",
        "book": 41,
        "chapter": 1,
        "endChapter": 1
      },
      {
        "reference": "2 Samuel 3:2–39",
        "book": 10,
        "chapter": 3,
        "endChapter": 3
      },
      {
        "reference": "Daniel 2:1–23",
        "book": 27,
        "chapter": 2,
        "endChapter": 2
      }
    ],
    "passage": "Marcos 1:21–45 · 2 Samuel 3:2–39 · Daniel 2:1–23",
    "theme": "14 de junio"
  },
  {
    "day": 166,
    "month": 6,
    "date": 15,
    "sourceReference": "Marcos 2 / 2 Samuel 4-5 / Daniel 2.24-49",
    "readings": [
      {
        "reference": "Marcos 2",
        "book": 41,
        "chapter": 2,
        "endChapter": 2
      },
      {
        "reference": "2 Samuel 4–5",
        "book": 10,
        "chapter": 4,
        "endChapter": 5
      },
      {
        "reference": "Daniel 2:24–49",
        "book": 27,
        "chapter": 2,
        "endChapter": 2
      }
    ],
    "passage": "Marcos 2 · 2 Samuel 4–5 · Daniel 2:24–49",
    "theme": "15 de junio"
  },
  {
    "day": 167,
    "month": 6,
    "date": 16,
    "sourceReference": "Marcos 3.1-19 / 2 Samuel 6 / Daniel 3",
    "readings": [
      {
        "reference": "Marcos 3:1–19",
        "book": 41,
        "chapter": 3,
        "endChapter": 3
      },
      {
        "reference": "2 Samuel 6",
        "book": 10,
        "chapter": 6,
        "endChapter": 6
      },
      {
        "reference": "Daniel 3",
        "book": 27,
        "chapter": 3,
        "endChapter": 3
      }
    ],
    "passage": "Marcos 3:1–19 · 2 Samuel 6 · Daniel 3",
    "theme": "16 de junio"
  },
  {
    "day": 168,
    "month": 6,
    "date": 17,
    "sourceReference": "Marcos 3.20-35 / 2 Samuel 7-8 / Daniel 4",
    "readings": [
      {
        "reference": "Marcos 3:20–35",
        "book": 41,
        "chapter": 3,
        "endChapter": 3
      },
      {
        "reference": "2 Samuel 7–8",
        "book": 10,
        "chapter": 7,
        "endChapter": 8
      },
      {
        "reference": "Daniel 4",
        "book": 27,
        "chapter": 4,
        "endChapter": 4
      }
    ],
    "passage": "Marcos 3:20–35 · 2 Samuel 7–8 · Daniel 4",
    "theme": "17 de junio"
  },
  {
    "day": 169,
    "month": 6,
    "date": 18,
    "sourceReference": "Marcos 4 1-20 / 2 Samuel 9-10 / Daniel 5",
    "readings": [
      {
        "reference": "Marcos 4:1–20",
        "book": 41,
        "chapter": 4,
        "endChapter": 4
      },
      {
        "reference": "2 Samuel 9–10",
        "book": 10,
        "chapter": 9,
        "endChapter": 10
      },
      {
        "reference": "Daniel 5",
        "book": 27,
        "chapter": 5,
        "endChapter": 5
      }
    ],
    "passage": "Marcos 4:1–20 · 2 Samuel 9–10 · Daniel 5",
    "theme": "18 de junio"
  },
  {
    "day": 170,
    "month": 6,
    "date": 19,
    "sourceReference": "Marcos 4.21-41 / 2 Samuel 11-12 / Daniel 6",
    "readings": [
      {
        "reference": "Marcos 4:21–41",
        "book": 41,
        "chapter": 4,
        "endChapter": 4
      },
      {
        "reference": "2 Samuel 11–12",
        "book": 10,
        "chapter": 11,
        "endChapter": 12
      },
      {
        "reference": "Daniel 6",
        "book": 27,
        "chapter": 6,
        "endChapter": 6
      }
    ],
    "passage": "Marcos 4:21–41 · 2 Samuel 11–12 · Daniel 6",
    "theme": "19 de junio"
  },
  {
    "day": 171,
    "month": 6,
    "date": 20,
    "sourceReference": "Marcos 5.1-20 / 2 Samuel 13 / Daniel 7",
    "readings": [
      {
        "reference": "Marcos 5:1–20",
        "book": 41,
        "chapter": 5,
        "endChapter": 5
      },
      {
        "reference": "2 Samuel 13",
        "book": 10,
        "chapter": 13,
        "endChapter": 13
      },
      {
        "reference": "Daniel 7",
        "book": 27,
        "chapter": 7,
        "endChapter": 7
      }
    ],
    "passage": "Marcos 5:1–20 · 2 Samuel 13 · Daniel 7",
    "theme": "20 de junio"
  },
  {
    "day": 172,
    "month": 6,
    "date": 21,
    "sourceReference": "Marcos 5.21-43 / 2 Samuel 14 / Daniel 8",
    "readings": [
      {
        "reference": "Marcos 5:21–43",
        "book": 41,
        "chapter": 5,
        "endChapter": 5
      },
      {
        "reference": "2 Samuel 14",
        "book": 10,
        "chapter": 14,
        "endChapter": 14
      },
      {
        "reference": "Daniel 8",
        "book": 27,
        "chapter": 8,
        "endChapter": 8
      }
    ],
    "passage": "Marcos 5:21–43 · 2 Samuel 14 · Daniel 8",
    "theme": "21 de junio"
  },
  {
    "day": 173,
    "month": 6,
    "date": 22,
    "sourceReference": "Marcos 6.1-29 / 2 Samuel 15 / Daniel 9",
    "readings": [
      {
        "reference": "Marcos 6:1–29",
        "book": 41,
        "chapter": 6,
        "endChapter": 6
      },
      {
        "reference": "2 Samuel 15",
        "book": 10,
        "chapter": 15,
        "endChapter": 15
      },
      {
        "reference": "Daniel 9",
        "book": 27,
        "chapter": 9,
        "endChapter": 9
      }
    ],
    "passage": "Marcos 6:1–29 · 2 Samuel 15 · Daniel 9",
    "theme": "22 de junio"
  },
  {
    "day": 174,
    "month": 6,
    "date": 23,
    "sourceReference": "Marcos 6.30-56 / 2 Samuel 16 / Daniel 10.1-11.2",
    "readings": [
      {
        "reference": "Marcos 6:30–56",
        "book": 41,
        "chapter": 6,
        "endChapter": 6
      },
      {
        "reference": "2 Samuel 16",
        "book": 10,
        "chapter": 16,
        "endChapter": 16
      },
      {
        "reference": "Daniel 10:1–11:2",
        "book": 27,
        "chapter": 10,
        "endChapter": 11
      }
    ],
    "passage": "Marcos 6:30–56 · 2 Samuel 16 · Daniel 10:1–11:2",
    "theme": "23 de junio"
  },
  {
    "day": 175,
    "month": 6,
    "date": 24,
    "sourceReference": "Marcos 7.1-13 / 2 Samuel 17 / Daniel 11.3-20",
    "readings": [
      {
        "reference": "Marcos 7:1–13",
        "book": 41,
        "chapter": 7,
        "endChapter": 7
      },
      {
        "reference": "2 Samuel 17",
        "book": 10,
        "chapter": 17,
        "endChapter": 17
      },
      {
        "reference": "Daniel 11:3–20",
        "book": 27,
        "chapter": 11,
        "endChapter": 11
      }
    ],
    "passage": "Marcos 7:1–13 · 2 Samuel 17 · Daniel 11:3–20",
    "theme": "24 de junio"
  },
  {
    "day": 176,
    "month": 6,
    "date": 25,
    "sourceReference": "Marcos 7.14-37 / 2 Samuel 18 / Daniel 11 21-45",
    "readings": [
      {
        "reference": "Marcos 7:14–37",
        "book": 41,
        "chapter": 7,
        "endChapter": 7
      },
      {
        "reference": "2 Samuel 18",
        "book": 10,
        "chapter": 18,
        "endChapter": 18
      },
      {
        "reference": "Daniel 11:21–45",
        "book": 27,
        "chapter": 11,
        "endChapter": 11
      }
    ],
    "passage": "Marcos 7:14–37 · 2 Samuel 18 · Daniel 11:21–45",
    "theme": "25 de junio"
  },
  {
    "day": 177,
    "month": 6,
    "date": 26,
    "sourceReference": "Marcos 8.1-21 / 2 Samuel 19 / Daniel 12",
    "readings": [
      {
        "reference": "Marcos 8:1–21",
        "book": 41,
        "chapter": 8,
        "endChapter": 8
      },
      {
        "reference": "2 Samuel 19",
        "book": 10,
        "chapter": 19,
        "endChapter": 19
      },
      {
        "reference": "Daniel 12",
        "book": 27,
        "chapter": 12,
        "endChapter": 12
      }
    ],
    "passage": "Marcos 8:1–21 · 2 Samuel 19 · Daniel 12",
    "theme": "26 de junio"
  },
  {
    "day": 178,
    "month": 6,
    "date": 27,
    "sourceReference": "Marcos 8.22-9.1 / 2 Samuel 20-21 / Oseas 1.1-2.1",
    "readings": [
      {
        "reference": "Marcos 8:22–9:1",
        "book": 41,
        "chapter": 8,
        "endChapter": 9
      },
      {
        "reference": "2 Samuel 20–21",
        "book": 10,
        "chapter": 20,
        "endChapter": 21
      },
      {
        "reference": "Oseas 1:1–2:1",
        "book": 28,
        "chapter": 1,
        "endChapter": 2
      }
    ],
    "passage": "Marcos 8:22–9:1 · 2 Samuel 20–21 · Oseas 1:1–2:1",
    "theme": "27 de junio"
  },
  {
    "day": 179,
    "month": 6,
    "date": 28,
    "sourceReference": "Marcos 9.2-50 / 2 Samuel 22 / Oseas 2.2-23",
    "readings": [
      {
        "reference": "Marcos 9:2–50",
        "book": 41,
        "chapter": 9,
        "endChapter": 9
      },
      {
        "reference": "2 Samuel 22",
        "book": 10,
        "chapter": 22,
        "endChapter": 22
      },
      {
        "reference": "Oseas 2:2–23",
        "book": 28,
        "chapter": 2,
        "endChapter": 2
      }
    ],
    "passage": "Marcos 9:2–50 · 2 Samuel 22 · Oseas 2:2–23",
    "theme": "28 de junio"
  },
  {
    "day": 180,
    "month": 6,
    "date": 29,
    "sourceReference": "Marcos 10.1-31 / 2 Samuel 23 / Oseas 3",
    "readings": [
      {
        "reference": "Marcos 10:1–31",
        "book": 41,
        "chapter": 10,
        "endChapter": 10
      },
      {
        "reference": "2 Samuel 23",
        "book": 10,
        "chapter": 23,
        "endChapter": 23
      },
      {
        "reference": "Oseas 3",
        "book": 28,
        "chapter": 3,
        "endChapter": 3
      }
    ],
    "passage": "Marcos 10:1–31 · 2 Samuel 23 · Oseas 3",
    "theme": "29 de junio"
  },
  {
    "day": 181,
    "month": 6,
    "date": 30,
    "sourceReference": "Marcos 10.32-52 / 2 Samuel 24 / Oseas 4.1-10",
    "readings": [
      {
        "reference": "Marcos 10:32–52",
        "book": 41,
        "chapter": 10,
        "endChapter": 10
      },
      {
        "reference": "2 Samuel 24",
        "book": 10,
        "chapter": 24,
        "endChapter": 24
      },
      {
        "reference": "Oseas 4:1–10",
        "book": 28,
        "chapter": 4,
        "endChapter": 4
      }
    ],
    "passage": "Marcos 10:32–52 · 2 Samuel 24 · Oseas 4:1–10",
    "theme": "30 de junio"
  },
  {
    "day": 182,
    "month": 7,
    "date": 1,
    "sourceReference": "Marcos 11.1-14 / 1 Reyes 1 / Oseas 4.11-5.3",
    "readings": [
      {
        "reference": "Marcos 11:1–14",
        "book": 41,
        "chapter": 11,
        "endChapter": 11
      },
      {
        "reference": "1 Reyes 1",
        "book": 11,
        "chapter": 1,
        "endChapter": 1
      },
      {
        "reference": "Oseas 4:11–5:3",
        "book": 28,
        "chapter": 4,
        "endChapter": 5
      }
    ],
    "passage": "Marcos 11:1–14 · 1 Reyes 1 · Oseas 4:11–5:3",
    "theme": "1 de julio"
  },
  {
    "day": 183,
    "month": 7,
    "date": 2,
    "sourceReference": "Marcos 11.15-33 / 1 Reyes 2 / Oseas 5.4-15",
    "readings": [
      {
        "reference": "Marcos 11:15–33",
        "book": 41,
        "chapter": 11,
        "endChapter": 11
      },
      {
        "reference": "1 Reyes 2",
        "book": 11,
        "chapter": 2,
        "endChapter": 2
      },
      {
        "reference": "Oseas 5:4–15",
        "book": 28,
        "chapter": 5,
        "endChapter": 5
      }
    ],
    "passage": "Marcos 11:15–33 · 1 Reyes 2 · Oseas 5:4–15",
    "theme": "2 de julio"
  },
  {
    "day": 184,
    "month": 7,
    "date": 3,
    "sourceReference": "Marcos 12.1-27 / 1 Reyes 3 / Oseas 6.1-7.2",
    "readings": [
      {
        "reference": "Marcos 12:1–27",
        "book": 41,
        "chapter": 12,
        "endChapter": 12
      },
      {
        "reference": "1 Reyes 3",
        "book": 11,
        "chapter": 3,
        "endChapter": 3
      },
      {
        "reference": "Oseas 6:1–7:2",
        "book": 28,
        "chapter": 6,
        "endChapter": 7
      }
    ],
    "passage": "Marcos 12:1–27 · 1 Reyes 3 · Oseas 6:1–7:2",
    "theme": "3 de julio"
  },
  {
    "day": 185,
    "month": 7,
    "date": 4,
    "sourceReference": "Marcos 12.28-44 / 1 Reyes 4-5 / Oseas 7.3-16",
    "readings": [
      {
        "reference": "Marcos 12:28–44",
        "book": 41,
        "chapter": 12,
        "endChapter": 12
      },
      {
        "reference": "1 Reyes 4–5",
        "book": 11,
        "chapter": 4,
        "endChapter": 5
      },
      {
        "reference": "Oseas 7:3–16",
        "book": 28,
        "chapter": 7,
        "endChapter": 7
      }
    ],
    "passage": "Marcos 12:28–44 · 1 Reyes 4–5 · Oseas 7:3–16",
    "theme": "4 de julio"
  },
  {
    "day": 186,
    "month": 7,
    "date": 5,
    "sourceReference": "Marcos 13.1-13 / 1 Reyes 6 / Oseas 8",
    "readings": [
      {
        "reference": "Marcos 13:1–13",
        "book": 41,
        "chapter": 13,
        "endChapter": 13
      },
      {
        "reference": "1 Reyes 6",
        "book": 11,
        "chapter": 6,
        "endChapter": 6
      },
      {
        "reference": "Oseas 8",
        "book": 28,
        "chapter": 8,
        "endChapter": 8
      }
    ],
    "passage": "Marcos 13:1–13 · 1 Reyes 6 · Oseas 8",
    "theme": "5 de julio"
  },
  {
    "day": 187,
    "month": 7,
    "date": 6,
    "sourceReference": "Marcos 13.14-37 / 1 Reyes 7 / Oseas 9.1-16",
    "readings": [
      {
        "reference": "Marcos 13:14–37",
        "book": 41,
        "chapter": 13,
        "endChapter": 13
      },
      {
        "reference": "1 Reyes 7",
        "book": 11,
        "chapter": 7,
        "endChapter": 7
      },
      {
        "reference": "Oseas 9:1–16",
        "book": 28,
        "chapter": 9,
        "endChapter": 9
      }
    ],
    "passage": "Marcos 13:14–37 · 1 Reyes 7 · Oseas 9:1–16",
    "theme": "6 de julio"
  },
  {
    "day": 188,
    "month": 7,
    "date": 7,
    "sourceReference": "Marcos 14.1-31 / 1 Reyes 8 / Oseas 9.17-10.15",
    "readings": [
      {
        "reference": "Marcos 14:1–31",
        "book": 41,
        "chapter": 14,
        "endChapter": 14
      },
      {
        "reference": "1 Reyes 8",
        "book": 11,
        "chapter": 8,
        "endChapter": 8
      },
      {
        "reference": "Oseas 9:17–10:15",
        "book": 28,
        "chapter": 9,
        "endChapter": 10
      }
    ],
    "passage": "Marcos 14:1–31 · 1 Reyes 8 · Oseas 9:17–10:15",
    "theme": "7 de julio"
  },
  {
    "day": 189,
    "month": 7,
    "date": 8,
    "sourceReference": "Marcos 14.32-72 / 1 Reyes 9 / Oseas 11.1-11",
    "readings": [
      {
        "reference": "Marcos 14:32–72",
        "book": 41,
        "chapter": 14,
        "endChapter": 14
      },
      {
        "reference": "1 Reyes 9",
        "book": 11,
        "chapter": 9,
        "endChapter": 9
      },
      {
        "reference": "Oseas 11:1–11",
        "book": 28,
        "chapter": 11,
        "endChapter": 11
      }
    ],
    "passage": "Marcos 14:32–72 · 1 Reyes 9 · Oseas 11:1–11",
    "theme": "8 de julio"
  },
  {
    "day": 190,
    "month": 7,
    "date": 9,
    "sourceReference": "Marcos 15.1-20 / 1 Reyes 10 / Oseas 11.12-12.14",
    "readings": [
      {
        "reference": "Marcos 15:1–20",
        "book": 41,
        "chapter": 15,
        "endChapter": 15
      },
      {
        "reference": "1 Reyes 10",
        "book": 11,
        "chapter": 10,
        "endChapter": 10
      },
      {
        "reference": "Oseas 11:12–12:14",
        "book": 28,
        "chapter": 11,
        "endChapter": 12
      }
    ],
    "passage": "Marcos 15:1–20 · 1 Reyes 10 · Oseas 11:12–12:14",
    "theme": "9 de julio"
  },
  {
    "day": 191,
    "month": 7,
    "date": 10,
    "sourceReference": "Marcos 15. 21-47 / 1 Reyes 11 / Oseas 13",
    "readings": [
      {
        "reference": "Marcos 15:21–47",
        "book": 41,
        "chapter": 15,
        "endChapter": 15
      },
      {
        "reference": "1 Reyes 11",
        "book": 11,
        "chapter": 11,
        "endChapter": 11
      },
      {
        "reference": "Oseas 13",
        "book": 28,
        "chapter": 13,
        "endChapter": 13
      }
    ],
    "passage": "Marcos 15:21–47 · 1 Reyes 11 · Oseas 13",
    "theme": "10 de julio"
  },
  {
    "day": 192,
    "month": 7,
    "date": 11,
    "sourceReference": "Marcos 16 / 1 Reyes 12.1-31 / Oseas 14",
    "readings": [
      {
        "reference": "Marcos 16",
        "book": 41,
        "chapter": 16,
        "endChapter": 16
      },
      {
        "reference": "1 Reyes 12:1–31",
        "book": 11,
        "chapter": 12,
        "endChapter": 12
      },
      {
        "reference": "Oseas 14",
        "book": 28,
        "chapter": 14,
        "endChapter": 14
      }
    ],
    "passage": "Marcos 16 · 1 Reyes 12:1–31 · Oseas 14",
    "theme": "11 de julio"
  },
  {
    "day": 193,
    "month": 7,
    "date": 12,
    "sourceReference": "1 Corintios 1.1-17 / 1 Reyes 12.32-13.34 / Joel 1",
    "readings": [
      {
        "reference": "1 Corintios 1:1–17",
        "book": 46,
        "chapter": 1,
        "endChapter": 1
      },
      {
        "reference": "1 Reyes 12:32–13:34",
        "book": 11,
        "chapter": 12,
        "endChapter": 13
      },
      {
        "reference": "Joel 1",
        "book": 29,
        "chapter": 1,
        "endChapter": 1
      }
    ],
    "passage": "1 Corintios 1:1–17 · 1 Reyes 12:32–13:34 · Joel 1",
    "theme": "12 de julio"
  },
  {
    "day": 194,
    "month": 7,
    "date": 13,
    "sourceReference": "1 Corintios 1.18-31 / 1 Reyes 14 / Joel 2.1-11",
    "readings": [
      {
        "reference": "1 Corintios 1:18–31",
        "book": 46,
        "chapter": 1,
        "endChapter": 1
      },
      {
        "reference": "1 Reyes 14",
        "book": 11,
        "chapter": 14,
        "endChapter": 14
      },
      {
        "reference": "Joel 2:1–11",
        "book": 29,
        "chapter": 2,
        "endChapter": 2
      }
    ],
    "passage": "1 Corintios 1:18–31 · 1 Reyes 14 · Joel 2:1–11",
    "theme": "13 de julio"
  },
  {
    "day": 195,
    "month": 7,
    "date": 14,
    "sourceReference": "1 Corintios 2 / 1 Reyes 15.1-32 / Joel 2.12-32",
    "readings": [
      {
        "reference": "1 Corintios 2",
        "book": 46,
        "chapter": 2,
        "endChapter": 2
      },
      {
        "reference": "1 Reyes 15:1–32",
        "book": 11,
        "chapter": 15,
        "endChapter": 15
      },
      {
        "reference": "Joel 2:12–32",
        "book": 29,
        "chapter": 2,
        "endChapter": 2
      }
    ],
    "passage": "1 Corintios 2 · 1 Reyes 15:1–32 · Joel 2:12–32",
    "theme": "14 de julio"
  },
  {
    "day": 196,
    "month": 7,
    "date": 15,
    "sourceReference": "1 Corintios 3 / 1 Reyes 15.33-16.34 / Joel 3",
    "readings": [
      {
        "reference": "1 Corintios 3",
        "book": 46,
        "chapter": 3,
        "endChapter": 3
      },
      {
        "reference": "1 Reyes 15:33–16:34",
        "book": 11,
        "chapter": 15,
        "endChapter": 16
      },
      {
        "reference": "Joel 3",
        "book": 29,
        "chapter": 3,
        "endChapter": 3
      }
    ],
    "passage": "1 Corintios 3 · 1 Reyes 15:33–16:34 · Joel 3",
    "theme": "15 de julio"
  },
  {
    "day": 197,
    "month": 7,
    "date": 16,
    "sourceReference": "1 Corintios 4 / 1 Reyes 17 / Amós 1",
    "readings": [
      {
        "reference": "1 Corintios 4",
        "book": 46,
        "chapter": 4,
        "endChapter": 4
      },
      {
        "reference": "1 Reyes 17",
        "book": 11,
        "chapter": 17,
        "endChapter": 17
      },
      {
        "reference": "Amós 1",
        "book": 30,
        "chapter": 1,
        "endChapter": 1
      }
    ],
    "passage": "1 Corintios 4 · 1 Reyes 17 · Amós 1",
    "theme": "16 de julio"
  },
  {
    "day": 198,
    "month": 7,
    "date": 17,
    "sourceReference": "1 Corintios 5 / 1 Reyes 18 / Amós 2.1-3.2",
    "readings": [
      {
        "reference": "1 Corintios 5",
        "book": 46,
        "chapter": 5,
        "endChapter": 5
      },
      {
        "reference": "1 Reyes 18",
        "book": 11,
        "chapter": 18,
        "endChapter": 18
      },
      {
        "reference": "Amós 2:1–3:2",
        "book": 30,
        "chapter": 2,
        "endChapter": 3
      }
    ],
    "passage": "1 Corintios 5 · 1 Reyes 18 · Amós 2:1–3:2",
    "theme": "17 de julio"
  },
  {
    "day": 199,
    "month": 7,
    "date": 18,
    "sourceReference": "1 Corintios 6 / 1 Reyes 19 / Amós 3.3-4.3",
    "readings": [
      {
        "reference": "1 Corintios 6",
        "book": 46,
        "chapter": 6,
        "endChapter": 6
      },
      {
        "reference": "1 Reyes 19",
        "book": 11,
        "chapter": 19,
        "endChapter": 19
      },
      {
        "reference": "Amós 3:3–4:3",
        "book": 30,
        "chapter": 3,
        "endChapter": 4
      }
    ],
    "passage": "1 Corintios 6 · 1 Reyes 19 · Amós 3:3–4:3",
    "theme": "18 de julio"
  },
  {
    "day": 200,
    "month": 7,
    "date": 19,
    "sourceReference": "1 Corintios 7.1-24 / 1 Reyes 20 / Amós 4.4-13",
    "readings": [
      {
        "reference": "1 Corintios 7:1–24",
        "book": 46,
        "chapter": 7,
        "endChapter": 7
      },
      {
        "reference": "1 Reyes 20",
        "book": 11,
        "chapter": 20,
        "endChapter": 20
      },
      {
        "reference": "Amós 4:4–13",
        "book": 30,
        "chapter": 4,
        "endChapter": 4
      }
    ],
    "passage": "1 Corintios 7:1–24 · 1 Reyes 20 · Amós 4:4–13",
    "theme": "19 de julio"
  },
  {
    "day": 201,
    "month": 7,
    "date": 20,
    "sourceReference": "1 Corintios 7.25-40 / 1 Reyes 21 / Amós 5",
    "readings": [
      {
        "reference": "1 Corintios 7:25–40",
        "book": 46,
        "chapter": 7,
        "endChapter": 7
      },
      {
        "reference": "1 Reyes 21",
        "book": 11,
        "chapter": 21,
        "endChapter": 21
      },
      {
        "reference": "Amós 5",
        "book": 30,
        "chapter": 5,
        "endChapter": 5
      }
    ],
    "passage": "1 Corintios 7:25–40 · 1 Reyes 21 · Amós 5",
    "theme": "20 de julio"
  },
  {
    "day": 202,
    "month": 7,
    "date": 21,
    "sourceReference": "1 Corintios 8 / 1 Reyes 22 / Amós 6",
    "readings": [
      {
        "reference": "1 Corintios 8",
        "book": 46,
        "chapter": 8,
        "endChapter": 8
      },
      {
        "reference": "1 Reyes 22",
        "book": 11,
        "chapter": 22,
        "endChapter": 22
      },
      {
        "reference": "Amós 6",
        "book": 30,
        "chapter": 6,
        "endChapter": 6
      }
    ],
    "passage": "1 Corintios 8 · 1 Reyes 22 · Amós 6",
    "theme": "21 de julio"
  },
  {
    "day": 203,
    "month": 7,
    "date": 22,
    "sourceReference": "1 Corintios 9 / 2 Reyes 1-2 / Amós 7",
    "readings": [
      {
        "reference": "1 Corintios 9",
        "book": 46,
        "chapter": 9,
        "endChapter": 9
      },
      {
        "reference": "2 Reyes 1–2",
        "book": 12,
        "chapter": 1,
        "endChapter": 2
      },
      {
        "reference": "Amós 7",
        "book": 30,
        "chapter": 7,
        "endChapter": 7
      }
    ],
    "passage": "1 Corintios 9 · 2 Reyes 1–2 · Amós 7",
    "theme": "22 de julio"
  },
  {
    "day": 204,
    "month": 7,
    "date": 23,
    "sourceReference": "1 Corintios 10 / 2 Reyes 3 / Amós 8",
    "readings": [
      {
        "reference": "1 Corintios 10",
        "book": 46,
        "chapter": 10,
        "endChapter": 10
      },
      {
        "reference": "2 Reyes 3",
        "book": 12,
        "chapter": 3,
        "endChapter": 3
      },
      {
        "reference": "Amós 8",
        "book": 30,
        "chapter": 8,
        "endChapter": 8
      }
    ],
    "passage": "1 Corintios 10 · 2 Reyes 3 · Amós 8",
    "theme": "23 de julio"
  },
  {
    "day": 205,
    "month": 7,
    "date": 24,
    "sourceReference": "1 Corintios 11.1-16 / 2 Reyes 4 / Amós 9",
    "readings": [
      {
        "reference": "1 Corintios 11:1–16",
        "book": 46,
        "chapter": 11,
        "endChapter": 11
      },
      {
        "reference": "2 Reyes 4",
        "book": 12,
        "chapter": 4,
        "endChapter": 4
      },
      {
        "reference": "Amós 9",
        "book": 30,
        "chapter": 9,
        "endChapter": 9
      }
    ],
    "passage": "1 Corintios 11:1–16 · 2 Reyes 4 · Amós 9",
    "theme": "24 de julio"
  },
  {
    "day": 206,
    "month": 7,
    "date": 25,
    "sourceReference": "1 Corintios 11.17-34 / 2 Reyes 5 / Abdías",
    "readings": [
      {
        "reference": "1 Corintios 11:17–34",
        "book": 46,
        "chapter": 11,
        "endChapter": 11
      },
      {
        "reference": "2 Reyes 5",
        "book": 12,
        "chapter": 5,
        "endChapter": 5
      },
      {
        "reference": "Abdías",
        "book": 31,
        "chapter": 1,
        "endChapter": 1
      }
    ],
    "passage": "1 Corintios 11:17–34 · 2 Reyes 5 · Abdías",
    "theme": "25 de julio"
  },
  {
    "day": 207,
    "month": 7,
    "date": 26,
    "sourceReference": "1 Corintios 12 / 2 Reyes 6.1-7.2 / Jonás 1",
    "readings": [
      {
        "reference": "1 Corintios 12",
        "book": 46,
        "chapter": 12,
        "endChapter": 12
      },
      {
        "reference": "2 Reyes 6:1–7:2",
        "book": 12,
        "chapter": 6,
        "endChapter": 7
      },
      {
        "reference": "Jonás 1",
        "book": 32,
        "chapter": 1,
        "endChapter": 1
      }
    ],
    "passage": "1 Corintios 12 · 2 Reyes 6:1–7:2 · Jonás 1",
    "theme": "26 de julio"
  },
  {
    "day": 208,
    "month": 7,
    "date": 27,
    "sourceReference": "1 Corintios 13 / 2 Reyes 7.3-20 / Jonás 2",
    "readings": [
      {
        "reference": "1 Corintios 13",
        "book": 46,
        "chapter": 13,
        "endChapter": 13
      },
      {
        "reference": "2 Reyes 7:3–20",
        "book": 12,
        "chapter": 7,
        "endChapter": 7
      },
      {
        "reference": "Jonás 2",
        "book": 32,
        "chapter": 2,
        "endChapter": 2
      }
    ],
    "passage": "1 Corintios 13 · 2 Reyes 7:3–20 · Jonás 2",
    "theme": "27 de julio"
  },
  {
    "day": 209,
    "month": 7,
    "date": 28,
    "sourceReference": "1 Corintios 14.1-25 / 2 Reyes 8 / Jonás 3",
    "readings": [
      {
        "reference": "1 Corintios 14:1–25",
        "book": 46,
        "chapter": 14,
        "endChapter": 14
      },
      {
        "reference": "2 Reyes 8",
        "book": 12,
        "chapter": 8,
        "endChapter": 8
      },
      {
        "reference": "Jonás 3",
        "book": 32,
        "chapter": 3,
        "endChapter": 3
      }
    ],
    "passage": "1 Corintios 14:1–25 · 2 Reyes 8 · Jonás 3",
    "theme": "28 de julio"
  },
  {
    "day": 210,
    "month": 7,
    "date": 29,
    "sourceReference": "1 Corintios 14.26-40 / 2 Reyes 9 / Jonás 4",
    "readings": [
      {
        "reference": "1 Corintios 14:26–40",
        "book": 46,
        "chapter": 14,
        "endChapter": 14
      },
      {
        "reference": "2 Reyes 9",
        "book": 12,
        "chapter": 9,
        "endChapter": 9
      },
      {
        "reference": "Jonás 4",
        "book": 32,
        "chapter": 4,
        "endChapter": 4
      }
    ],
    "passage": "1 Corintios 14:26–40 · 2 Reyes 9 · Jonás 4",
    "theme": "29 de julio"
  },
  {
    "day": 211,
    "month": 7,
    "date": 30,
    "sourceReference": "1 Corintios 15.1-34 / 2 Reyes 10 / Miqueas 1",
    "readings": [
      {
        "reference": "1 Corintios 15:1–34",
        "book": 46,
        "chapter": 15,
        "endChapter": 15
      },
      {
        "reference": "2 Reyes 10",
        "book": 12,
        "chapter": 10,
        "endChapter": 10
      },
      {
        "reference": "Miqueas 1",
        "book": 33,
        "chapter": 1,
        "endChapter": 1
      }
    ],
    "passage": "1 Corintios 15:1–34 · 2 Reyes 10 · Miqueas 1",
    "theme": "30 de julio"
  },
  {
    "day": 212,
    "month": 7,
    "date": 31,
    "sourceReference": "1 Corintios 15.35-58 / 2 Reyes 11 / Miqueas 2",
    "readings": [
      {
        "reference": "1 Corintios 15:35–58",
        "book": 46,
        "chapter": 15,
        "endChapter": 15
      },
      {
        "reference": "2 Reyes 11",
        "book": 12,
        "chapter": 11,
        "endChapter": 11
      },
      {
        "reference": "Miqueas 2",
        "book": 33,
        "chapter": 2,
        "endChapter": 2
      }
    ],
    "passage": "1 Corintios 15:35–58 · 2 Reyes 11 · Miqueas 2",
    "theme": "31 de julio"
  },
  {
    "day": 213,
    "month": 8,
    "date": 1,
    "sourceReference": "1 Corintios 16 / 2 Reyes 12-13 / Miqueas 3",
    "readings": [
      {
        "reference": "1 Corintios 16",
        "book": 46,
        "chapter": 16,
        "endChapter": 16
      },
      {
        "reference": "2 Reyes 12–13",
        "book": 12,
        "chapter": 12,
        "endChapter": 13
      },
      {
        "reference": "Miqueas 3",
        "book": 33,
        "chapter": 3,
        "endChapter": 3
      }
    ],
    "passage": "1 Corintios 16 · 2 Reyes 12–13 · Miqueas 3",
    "theme": "1 de agosto"
  },
  {
    "day": 214,
    "month": 8,
    "date": 2,
    "sourceReference": "2 Corintios 1.1-2.4 / 2 Reyes 14 / Miqueas 4.1-5.1",
    "readings": [
      {
        "reference": "2 Corintios 1:1–2:4",
        "book": 47,
        "chapter": 1,
        "endChapter": 2
      },
      {
        "reference": "2 Reyes 14",
        "book": 12,
        "chapter": 14,
        "endChapter": 14
      },
      {
        "reference": "Miqueas 4:1–5:1",
        "book": 33,
        "chapter": 4,
        "endChapter": 5
      }
    ],
    "passage": "2 Corintios 1:1–2:4 · 2 Reyes 14 · Miqueas 4:1–5:1",
    "theme": "2 de agosto"
  },
  {
    "day": 215,
    "month": 8,
    "date": 3,
    "sourceReference": "2 Corintios 2.5-3.18 / 2 Reyes 15-16 / Miqueas 5.2-15",
    "readings": [
      {
        "reference": "2 Corintios 2:5–3:18",
        "book": 47,
        "chapter": 2,
        "endChapter": 3
      },
      {
        "reference": "2 Reyes 15–16",
        "book": 12,
        "chapter": 15,
        "endChapter": 16
      },
      {
        "reference": "Miqueas 5:2–15",
        "book": 33,
        "chapter": 5,
        "endChapter": 5
      }
    ],
    "passage": "2 Corintios 2:5–3:18 · 2 Reyes 15–16 · Miqueas 5:2–15",
    "theme": "3 de agosto"
  },
  {
    "day": 216,
    "month": 8,
    "date": 4,
    "sourceReference": "2 Corintios 4.1-5.10 / 2 Reyes 17 / Miqueas 6",
    "readings": [
      {
        "reference": "2 Corintios 4:1–5:10",
        "book": 47,
        "chapter": 4,
        "endChapter": 5
      },
      {
        "reference": "2 Reyes 17",
        "book": 12,
        "chapter": 17,
        "endChapter": 17
      },
      {
        "reference": "Miqueas 6",
        "book": 33,
        "chapter": 6,
        "endChapter": 6
      }
    ],
    "passage": "2 Corintios 4:1–5:10 · 2 Reyes 17 · Miqueas 6",
    "theme": "4 de agosto"
  },
  {
    "day": 217,
    "month": 8,
    "date": 5,
    "sourceReference": "2 Corintios 5.11-6.13 / 2 Reyes 18 / Miqueas 7",
    "readings": [
      {
        "reference": "2 Corintios 5:11–6:13",
        "book": 47,
        "chapter": 5,
        "endChapter": 6
      },
      {
        "reference": "2 Reyes 18",
        "book": 12,
        "chapter": 18,
        "endChapter": 18
      },
      {
        "reference": "Miqueas 7",
        "book": 33,
        "chapter": 7,
        "endChapter": 7
      }
    ],
    "passage": "2 Corintios 5:11–6:13 · 2 Reyes 18 · Miqueas 7",
    "theme": "5 de agosto"
  },
  {
    "day": 218,
    "month": 8,
    "date": 6,
    "sourceReference": "2 Corintios 6.14-7.16 / 2 Reyes 19 / Nahúm 1",
    "readings": [
      {
        "reference": "2 Corintios 6:14–7:16",
        "book": 47,
        "chapter": 6,
        "endChapter": 7
      },
      {
        "reference": "2 Reyes 19",
        "book": 12,
        "chapter": 19,
        "endChapter": 19
      },
      {
        "reference": "Nahúm 1",
        "book": 34,
        "chapter": 1,
        "endChapter": 1
      }
    ],
    "passage": "2 Corintios 6:14–7:16 · 2 Reyes 19 · Nahúm 1",
    "theme": "6 de agosto"
  },
  {
    "day": 219,
    "month": 8,
    "date": 7,
    "sourceReference": "2 Corintios 8 / 2 Reyes 20-21 / Nahúm 2",
    "readings": [
      {
        "reference": "2 Corintios 8",
        "book": 47,
        "chapter": 8,
        "endChapter": 8
      },
      {
        "reference": "2 Reyes 20–21",
        "book": 12,
        "chapter": 20,
        "endChapter": 21
      },
      {
        "reference": "Nahúm 2",
        "book": 34,
        "chapter": 2,
        "endChapter": 2
      }
    ],
    "passage": "2 Corintios 8 · 2 Reyes 20–21 · Nahúm 2",
    "theme": "7 de agosto"
  },
  {
    "day": 220,
    "month": 8,
    "date": 8,
    "sourceReference": "2 Corintios 9 / 2 Reyes 22.1-23.34 / Nahúm 3",
    "readings": [
      {
        "reference": "2 Corintios 9",
        "book": 47,
        "chapter": 9,
        "endChapter": 9
      },
      {
        "reference": "2 Reyes 22:1–23:34",
        "book": 12,
        "chapter": 22,
        "endChapter": 23
      },
      {
        "reference": "Nahúm 3",
        "book": 34,
        "chapter": 3,
        "endChapter": 3
      }
    ],
    "passage": "2 Corintios 9 · 2 Reyes 22:1–23:34 · Nahúm 3",
    "theme": "8 de agosto"
  },
  {
    "day": 221,
    "month": 8,
    "date": 9,
    "sourceReference": "2 Corintios 10 / 2 Reyes 23.35-24.20 / Habacuc 1",
    "readings": [
      {
        "reference": "2 Corintios 10",
        "book": 47,
        "chapter": 10,
        "endChapter": 10
      },
      {
        "reference": "2 Reyes 23:35–24:20",
        "book": 12,
        "chapter": 23,
        "endChapter": 24
      },
      {
        "reference": "Habacuc 1",
        "book": 35,
        "chapter": 1,
        "endChapter": 1
      }
    ],
    "passage": "2 Corintios 10 · 2 Reyes 23:35–24:20 · Habacuc 1",
    "theme": "9 de agosto"
  },
  {
    "day": 222,
    "month": 8,
    "date": 10,
    "sourceReference": "2 Corintios 11 / 2 Reyes 25 / Habacuc 2",
    "readings": [
      {
        "reference": "2 Corintios 11",
        "book": 47,
        "chapter": 11,
        "endChapter": 11
      },
      {
        "reference": "2 Reyes 25",
        "book": 12,
        "chapter": 25,
        "endChapter": 25
      },
      {
        "reference": "Habacuc 2",
        "book": 35,
        "chapter": 2,
        "endChapter": 2
      }
    ],
    "passage": "2 Corintios 11 · 2 Reyes 25 · Habacuc 2",
    "theme": "10 de agosto"
  },
  {
    "day": 223,
    "month": 8,
    "date": 11,
    "sourceReference": "2 Corintios 12 / 1 Crónicas 1-2 / Habacuc 3",
    "readings": [
      {
        "reference": "2 Corintios 12",
        "book": 47,
        "chapter": 12,
        "endChapter": 12
      },
      {
        "reference": "1 Crónicas 1–2",
        "book": 13,
        "chapter": 1,
        "endChapter": 2
      },
      {
        "reference": "Habacuc 3",
        "book": 35,
        "chapter": 3,
        "endChapter": 3
      }
    ],
    "passage": "2 Corintios 12 · 1 Crónicas 1–2 · Habacuc 3",
    "theme": "11 de agosto"
  },
  {
    "day": 224,
    "month": 8,
    "date": 12,
    "sourceReference": "2 Corintios 13 / 1 Crónicas 3-4 / Sofonías 1",
    "readings": [
      {
        "reference": "2 Corintios 13",
        "book": 47,
        "chapter": 13,
        "endChapter": 13
      },
      {
        "reference": "1 Crónicas 3–4",
        "book": 13,
        "chapter": 3,
        "endChapter": 4
      },
      {
        "reference": "Sofonías 1",
        "book": 36,
        "chapter": 1,
        "endChapter": 1
      }
    ],
    "passage": "2 Corintios 13 · 1 Crónicas 3–4 · Sofonías 1",
    "theme": "12 de agosto"
  },
  {
    "day": 225,
    "month": 8,
    "date": 13,
    "sourceReference": "Juan 1.1-18 / 1 Crónicas 5-6 / Sofonías 2",
    "readings": [
      {
        "reference": "Juan 1:1–18",
        "book": 43,
        "chapter": 1,
        "endChapter": 1
      },
      {
        "reference": "1 Crónicas 5–6",
        "book": 13,
        "chapter": 5,
        "endChapter": 6
      },
      {
        "reference": "Sofonías 2",
        "book": 36,
        "chapter": 2,
        "endChapter": 2
      }
    ],
    "passage": "Juan 1:1–18 · 1 Crónicas 5–6 · Sofonías 2",
    "theme": "13 de agosto"
  },
  {
    "day": 226,
    "month": 8,
    "date": 14,
    "sourceReference": "Juan 1.19-34 / 1 Crónicas 7-8 / Sofonías 3",
    "readings": [
      {
        "reference": "Juan 1:19–34",
        "book": 43,
        "chapter": 1,
        "endChapter": 1
      },
      {
        "reference": "1 Crónicas 7–8",
        "book": 13,
        "chapter": 7,
        "endChapter": 8
      },
      {
        "reference": "Sofonías 3",
        "book": 36,
        "chapter": 3,
        "endChapter": 3
      }
    ],
    "passage": "Juan 1:19–34 · 1 Crónicas 7–8 · Sofonías 3",
    "theme": "14 de agosto"
  },
  {
    "day": 227,
    "month": 8,
    "date": 15,
    "sourceReference": "Juan 1.35-51 / 1 Crónicas 9 / Hageo 1-2",
    "readings": [
      {
        "reference": "Juan 1:35–51",
        "book": 43,
        "chapter": 1,
        "endChapter": 1
      },
      {
        "reference": "1 Crónicas 9",
        "book": 13,
        "chapter": 9,
        "endChapter": 9
      },
      {
        "reference": "Hageo 1–2",
        "book": 37,
        "chapter": 1,
        "endChapter": 2
      }
    ],
    "passage": "Juan 1:35–51 · 1 Crónicas 9 · Hageo 1–2",
    "theme": "15 de agosto"
  },
  {
    "day": 228,
    "month": 8,
    "date": 16,
    "sourceReference": "Juan 2 / 1 Crónicas 10-11 / Zacarías 1",
    "readings": [
      {
        "reference": "Juan 2",
        "book": 43,
        "chapter": 2,
        "endChapter": 2
      },
      {
        "reference": "1 Crónicas 10–11",
        "book": 13,
        "chapter": 10,
        "endChapter": 11
      },
      {
        "reference": "Zacarías 1",
        "book": 38,
        "chapter": 1,
        "endChapter": 1
      }
    ],
    "passage": "Juan 2 · 1 Crónicas 10–11 · Zacarías 1",
    "theme": "16 de agosto"
  },
  {
    "day": 229,
    "month": 8,
    "date": 17,
    "sourceReference": "Juan 3.1-21 / 1 Crónicas 12 / Zacarías 2",
    "readings": [
      {
        "reference": "Juan 3:1–21",
        "book": 43,
        "chapter": 3,
        "endChapter": 3
      },
      {
        "reference": "1 Crónicas 12",
        "book": 13,
        "chapter": 12,
        "endChapter": 12
      },
      {
        "reference": "Zacarías 2",
        "book": 38,
        "chapter": 2,
        "endChapter": 2
      }
    ],
    "passage": "Juan 3:1–21 · 1 Crónicas 12 · Zacarías 2",
    "theme": "17 de agosto"
  },
  {
    "day": 230,
    "month": 8,
    "date": 18,
    "sourceReference": "Juan 3.22-36 / 1 Crónicas 13-14 / Zacarías 3",
    "readings": [
      {
        "reference": "Juan 3:22–36",
        "book": 43,
        "chapter": 3,
        "endChapter": 3
      },
      {
        "reference": "1 Crónicas 13–14",
        "book": 13,
        "chapter": 13,
        "endChapter": 14
      },
      {
        "reference": "Zacarías 3",
        "book": 38,
        "chapter": 3,
        "endChapter": 3
      }
    ],
    "passage": "Juan 3:22–36 · 1 Crónicas 13–14 · Zacarías 3",
    "theme": "18 de agosto"
  },
  {
    "day": 231,
    "month": 8,
    "date": 19,
    "sourceReference": "Juan 4.1-26 / 1 Crónicas 15.1-16.7 / Zacarías 4",
    "readings": [
      {
        "reference": "Juan 4:1–26",
        "book": 43,
        "chapter": 4,
        "endChapter": 4
      },
      {
        "reference": "1 Crónicas 15:1–16:7",
        "book": 13,
        "chapter": 15,
        "endChapter": 16
      },
      {
        "reference": "Zacarías 4",
        "book": 38,
        "chapter": 4,
        "endChapter": 4
      }
    ],
    "passage": "Juan 4:1–26 · 1 Crónicas 15:1–16:7 · Zacarías 4",
    "theme": "19 de agosto"
  },
  {
    "day": 232,
    "month": 8,
    "date": 20,
    "sourceReference": "Juan 4.27-42 / 1 Crónicas 16.8-43 / Zacarías 5",
    "readings": [
      {
        "reference": "Juan 4:27–42",
        "book": 43,
        "chapter": 4,
        "endChapter": 4
      },
      {
        "reference": "1 Crónicas 16:8–43",
        "book": 13,
        "chapter": 16,
        "endChapter": 16
      },
      {
        "reference": "Zacarías 5",
        "book": 38,
        "chapter": 5,
        "endChapter": 5
      }
    ],
    "passage": "Juan 4:27–42 · 1 Crónicas 16:8–43 · Zacarías 5",
    "theme": "20 de agosto"
  },
  {
    "day": 233,
    "month": 8,
    "date": 21,
    "sourceReference": "Juan 4.43-54 / 1 Crónicas 17 / Zacarías 6",
    "readings": [
      {
        "reference": "Juan 4:43–54",
        "book": 43,
        "chapter": 4,
        "endChapter": 4
      },
      {
        "reference": "1 Crónicas 17",
        "book": 13,
        "chapter": 17,
        "endChapter": 17
      },
      {
        "reference": "Zacarías 6",
        "book": 38,
        "chapter": 6,
        "endChapter": 6
      }
    ],
    "passage": "Juan 4:43–54 · 1 Crónicas 17 · Zacarías 6",
    "theme": "21 de agosto"
  },
  {
    "day": 234,
    "month": 8,
    "date": 22,
    "sourceReference": "Juan 5.1-18 / 1 Crónicas 18-19 / Zacarías 7",
    "readings": [
      {
        "reference": "Juan 5:1–18",
        "book": 43,
        "chapter": 5,
        "endChapter": 5
      },
      {
        "reference": "1 Crónicas 18–19",
        "book": 13,
        "chapter": 18,
        "endChapter": 19
      },
      {
        "reference": "Zacarías 7",
        "book": 38,
        "chapter": 7,
        "endChapter": 7
      }
    ],
    "passage": "Juan 5:1–18 · 1 Crónicas 18–19 · Zacarías 7",
    "theme": "22 de agosto"
  },
  {
    "day": 235,
    "month": 8,
    "date": 23,
    "sourceReference": "Juan 5.19-47 / 1 Crónicas 20-22.1 / Zacarías 8",
    "readings": [
      {
        "reference": "Juan 5:19–47",
        "book": 43,
        "chapter": 5,
        "endChapter": 5
      },
      {
        "reference": "1 Crónicas 20–22:1",
        "book": 13,
        "chapter": 20,
        "endChapter": 22
      },
      {
        "reference": "Zacarías 8",
        "book": 38,
        "chapter": 8,
        "endChapter": 8
      }
    ],
    "passage": "Juan 5:19–47 · 1 Crónicas 20–22:1 · Zacarías 8",
    "theme": "23 de agosto"
  },
  {
    "day": 236,
    "month": 8,
    "date": 24,
    "sourceReference": "Juan 6.1-24 / 1 Crónicas 22.2-23.21 / Zacarías 9",
    "readings": [
      {
        "reference": "Juan 6:1–24",
        "book": 43,
        "chapter": 6,
        "endChapter": 6
      },
      {
        "reference": "1 Crónicas 22:2–23:21",
        "book": 13,
        "chapter": 22,
        "endChapter": 23
      },
      {
        "reference": "Zacarías 9",
        "book": 38,
        "chapter": 9,
        "endChapter": 9
      }
    ],
    "passage": "Juan 6:1–24 · 1 Crónicas 22:2–23:21 · Zacarías 9",
    "theme": "24 de agosto"
  },
  {
    "day": 237,
    "month": 8,
    "date": 25,
    "sourceReference": "Juan 6.25-59 / 1 Crónicas 24 / Zacarías 10",
    "readings": [
      {
        "reference": "Juan 6:25–59",
        "book": 43,
        "chapter": 6,
        "endChapter": 6
      },
      {
        "reference": "1 Crónicas 24",
        "book": 13,
        "chapter": 24,
        "endChapter": 24
      },
      {
        "reference": "Zacarías 10",
        "book": 38,
        "chapter": 10,
        "endChapter": 10
      }
    ],
    "passage": "Juan 6:25–59 · 1 Crónicas 24 · Zacarías 10",
    "theme": "25 de agosto"
  },
  {
    "day": 238,
    "month": 8,
    "date": 26,
    "sourceReference": "Juan 6.60-71 / 1 Crónicas 25-26 / Zacarías 11",
    "readings": [
      {
        "reference": "Juan 6:60–71",
        "book": 43,
        "chapter": 6,
        "endChapter": 6
      },
      {
        "reference": "1 Crónicas 25–26",
        "book": 13,
        "chapter": 25,
        "endChapter": 26
      },
      {
        "reference": "Zacarías 11",
        "book": 38,
        "chapter": 11,
        "endChapter": 11
      }
    ],
    "passage": "Juan 6:60–71 · 1 Crónicas 25–26 · Zacarías 11",
    "theme": "26 de agosto"
  },
  {
    "day": 239,
    "month": 8,
    "date": 27,
    "sourceReference": "Juan 7.1-24 / 1 Crónicas 27-28 / Zacarías 12",
    "readings": [
      {
        "reference": "Juan 7:1–24",
        "book": 43,
        "chapter": 7,
        "endChapter": 7
      },
      {
        "reference": "1 Crónicas 27–28",
        "book": 13,
        "chapter": 27,
        "endChapter": 28
      },
      {
        "reference": "Zacarías 12",
        "book": 38,
        "chapter": 12,
        "endChapter": 12
      }
    ],
    "passage": "Juan 7:1–24 · 1 Crónicas 27–28 · Zacarías 12",
    "theme": "27 de agosto"
  },
  {
    "day": 240,
    "month": 8,
    "date": 28,
    "sourceReference": "Juan 7.25-52 / 1 Crónicas 29 / Zacarías 13",
    "readings": [
      {
        "reference": "Juan 7:25–52",
        "book": 43,
        "chapter": 7,
        "endChapter": 7
      },
      {
        "reference": "1 Crónicas 29",
        "book": 13,
        "chapter": 29,
        "endChapter": 29
      },
      {
        "reference": "Zacarías 13",
        "book": 38,
        "chapter": 13,
        "endChapter": 13
      }
    ],
    "passage": "Juan 7:25–52 · 1 Crónicas 29 · Zacarías 13",
    "theme": "28 de agosto"
  },
  {
    "day": 241,
    "month": 8,
    "date": 29,
    "sourceReference": "Juan 8.1-20 / 2 Crónicas 1.1-2.16 / Zacarías 14",
    "readings": [
      {
        "reference": "Juan 8:1–20",
        "book": 43,
        "chapter": 8,
        "endChapter": 8
      },
      {
        "reference": "2 Crónicas 1:1–2:16",
        "book": 14,
        "chapter": 1,
        "endChapter": 2
      },
      {
        "reference": "Zacarías 14",
        "book": 38,
        "chapter": 14,
        "endChapter": 14
      }
    ],
    "passage": "Juan 8:1–20 · 2 Crónicas 1:1–2:16 · Zacarías 14",
    "theme": "29 de agosto"
  },
  {
    "day": 242,
    "month": 8,
    "date": 30,
    "sourceReference": "Juan 8.21-47 / 2 Crónicas 2.17-5.1 / Malaquías 1.1-2.9",
    "readings": [
      {
        "reference": "Juan 8:21–47",
        "book": 43,
        "chapter": 8,
        "endChapter": 8
      },
      {
        "reference": "2 Crónicas 2:17–5:1",
        "book": 14,
        "chapter": 2,
        "endChapter": 5
      },
      {
        "reference": "Malaquías 1:1–2:9",
        "book": 39,
        "chapter": 1,
        "endChapter": 2
      }
    ],
    "passage": "Juan 8:21–47 · 2 Crónicas 2:17–5:1 · Malaquías 1:1–2:9",
    "theme": "30 de agosto"
  },
  {
    "day": 243,
    "month": 8,
    "date": 31,
    "sourceReference": "Juan 8.48-59 / 2 Crónicas 5.2-14 / Malaquías 2.10-16",
    "readings": [
      {
        "reference": "Juan 8:48–59",
        "book": 43,
        "chapter": 8,
        "endChapter": 8
      },
      {
        "reference": "2 Crónicas 5:2–14",
        "book": 14,
        "chapter": 5,
        "endChapter": 5
      },
      {
        "reference": "Malaquías 2:10–16",
        "book": 39,
        "chapter": 2,
        "endChapter": 2
      }
    ],
    "passage": "Juan 8:48–59 · 2 Crónicas 5:2–14 · Malaquías 2:10–16",
    "theme": "31 de agosto"
  },
  {
    "day": 244,
    "month": 9,
    "date": 1,
    "sourceReference": "Juan 9.1-23 / 2 Crónicas 6 / Malaquías 2.17-3.18",
    "readings": [
      {
        "reference": "Juan 9:1–23",
        "book": 43,
        "chapter": 9,
        "endChapter": 9
      },
      {
        "reference": "2 Crónicas 6",
        "book": 14,
        "chapter": 6,
        "endChapter": 6
      },
      {
        "reference": "Malaquías 2:17–3:18",
        "book": 39,
        "chapter": 2,
        "endChapter": 3
      }
    ],
    "passage": "Juan 9:1–23 · 2 Crónicas 6 · Malaquías 2:17–3:18",
    "theme": "1 de septiembre"
  },
  {
    "day": 245,
    "month": 9,
    "date": 2,
    "sourceReference": "Juan 9.24-41 / 2 Crónicas 7 / Malaquías 4",
    "readings": [
      {
        "reference": "Juan 9:24–41",
        "book": 43,
        "chapter": 9,
        "endChapter": 9
      },
      {
        "reference": "2 Crónicas 7",
        "book": 14,
        "chapter": 7,
        "endChapter": 7
      },
      {
        "reference": "Malaquías 4",
        "book": 39,
        "chapter": 4,
        "endChapter": 4
      }
    ],
    "passage": "Juan 9:24–41 · 2 Crónicas 7 · Malaquías 4",
    "theme": "2 de septiembre"
  },
  {
    "day": 246,
    "month": 9,
    "date": 3,
    "sourceReference": "Juan 10.1-21 / 2 Crónicas 8 / Salmos 73",
    "readings": [
      {
        "reference": "Juan 10:1–21",
        "book": 43,
        "chapter": 10,
        "endChapter": 10
      },
      {
        "reference": "2 Crónicas 8",
        "book": 14,
        "chapter": 8,
        "endChapter": 8
      },
      {
        "reference": "Salmos 73",
        "book": 19,
        "chapter": 73,
        "endChapter": 73
      }
    ],
    "passage": "Juan 10:1–21 · 2 Crónicas 8 · Salmos 73",
    "theme": "3 de septiembre"
  },
  {
    "day": 247,
    "month": 9,
    "date": 4,
    "sourceReference": "Juan 10.22-42 / 2 Crónicas 9 / Salmos 74",
    "readings": [
      {
        "reference": "Juan 10:22–42",
        "book": 43,
        "chapter": 10,
        "endChapter": 10
      },
      {
        "reference": "2 Crónicas 9",
        "book": 14,
        "chapter": 9,
        "endChapter": 9
      },
      {
        "reference": "Salmos 74",
        "book": 19,
        "chapter": 74,
        "endChapter": 74
      }
    ],
    "passage": "Juan 10:22–42 · 2 Crónicas 9 · Salmos 74",
    "theme": "4 de septiembre"
  },
  {
    "day": 248,
    "month": 9,
    "date": 5,
    "sourceReference": "Juan 11.1-27 / 2 Crónicas 10-11 / Salmos 75",
    "readings": [
      {
        "reference": "Juan 11:1–27",
        "book": 43,
        "chapter": 11,
        "endChapter": 11
      },
      {
        "reference": "2 Crónicas 10–11",
        "book": 14,
        "chapter": 10,
        "endChapter": 11
      },
      {
        "reference": "Salmos 75",
        "book": 19,
        "chapter": 75,
        "endChapter": 75
      }
    ],
    "passage": "Juan 11:1–27 · 2 Crónicas 10–11 · Salmos 75",
    "theme": "5 de septiembre"
  },
  {
    "day": 249,
    "month": 9,
    "date": 6,
    "sourceReference": "Juan 11.28-57 / 2 Crónicas 12-13 / Salmos 76",
    "readings": [
      {
        "reference": "Juan 11:28–57",
        "book": 43,
        "chapter": 11,
        "endChapter": 11
      },
      {
        "reference": "2 Crónicas 12–13",
        "book": 14,
        "chapter": 12,
        "endChapter": 13
      },
      {
        "reference": "Salmos 76",
        "book": 19,
        "chapter": 76,
        "endChapter": 76
      }
    ],
    "passage": "Juan 11:28–57 · 2 Crónicas 12–13 · Salmos 76",
    "theme": "6 de septiembre"
  },
  {
    "day": 250,
    "month": 9,
    "date": 7,
    "sourceReference": "Juan 12.1-26 / 2 Crónicas 14-15 / Salmos 77",
    "readings": [
      {
        "reference": "Juan 12:1–26",
        "book": 43,
        "chapter": 12,
        "endChapter": 12
      },
      {
        "reference": "2 Crónicas 14–15",
        "book": 14,
        "chapter": 14,
        "endChapter": 15
      },
      {
        "reference": "Salmos 77",
        "book": 19,
        "chapter": 77,
        "endChapter": 77
      }
    ],
    "passage": "Juan 12:1–26 · 2 Crónicas 14–15 · Salmos 77",
    "theme": "7 de septiembre"
  },
  {
    "day": 251,
    "month": 9,
    "date": 8,
    "sourceReference": "Juan 12.27-50 / 2 Crónicas 16-17 / Salmos 78.1-20",
    "readings": [
      {
        "reference": "Juan 12:27–50",
        "book": 43,
        "chapter": 12,
        "endChapter": 12
      },
      {
        "reference": "2 Crónicas 16–17",
        "book": 14,
        "chapter": 16,
        "endChapter": 17
      },
      {
        "reference": "Salmos 78:1–20",
        "book": 19,
        "chapter": 78,
        "endChapter": 78
      }
    ],
    "passage": "Juan 12:27–50 · 2 Crónicas 16–17 · Salmos 78:1–20",
    "theme": "8 de septiembre"
  },
  {
    "day": 252,
    "month": 9,
    "date": 9,
    "sourceReference": "Juan 13.1-20 / 2 Crónicas 18 / Salmos 78.21-37",
    "readings": [
      {
        "reference": "Juan 13:1–20",
        "book": 43,
        "chapter": 13,
        "endChapter": 13
      },
      {
        "reference": "2 Crónicas 18",
        "book": 14,
        "chapter": 18,
        "endChapter": 18
      },
      {
        "reference": "Salmos 78:21–37",
        "book": 19,
        "chapter": 78,
        "endChapter": 78
      }
    ],
    "passage": "Juan 13:1–20 · 2 Crónicas 18 · Salmos 78:21–37",
    "theme": "9 de septiembre"
  },
  {
    "day": 253,
    "month": 9,
    "date": 10,
    "sourceReference": "Juan 13.21-38 / 2 Crónicas 19 / Salmos 78.38-55",
    "readings": [
      {
        "reference": "Juan 13:21–38",
        "book": 43,
        "chapter": 13,
        "endChapter": 13
      },
      {
        "reference": "2 Crónicas 19",
        "book": 14,
        "chapter": 19,
        "endChapter": 19
      },
      {
        "reference": "Salmos 78:38–55",
        "book": 19,
        "chapter": 78,
        "endChapter": 78
      }
    ],
    "passage": "Juan 13:21–38 · 2 Crónicas 19 · Salmos 78:38–55",
    "theme": "10 de septiembre"
  },
  {
    "day": 254,
    "month": 9,
    "date": 11,
    "sourceReference": "Juan 14.1-14 / 2 Crónicas 20.1-21.1 / Salmos 78.56-72",
    "readings": [
      {
        "reference": "Juan 14:1–14",
        "book": 43,
        "chapter": 14,
        "endChapter": 14
      },
      {
        "reference": "2 Crónicas 20:1–21:1",
        "book": 14,
        "chapter": 20,
        "endChapter": 21
      },
      {
        "reference": "Salmos 78:56–72",
        "book": 19,
        "chapter": 78,
        "endChapter": 78
      }
    ],
    "passage": "Juan 14:1–14 · 2 Crónicas 20:1–21:1 · Salmos 78:56–72",
    "theme": "11 de septiembre"
  },
  {
    "day": 255,
    "month": 9,
    "date": 12,
    "sourceReference": "Juan 14.15-31 / 2 Crónicas 21.2-22.12 / Salmos 79",
    "readings": [
      {
        "reference": "Juan 14:15–31",
        "book": 43,
        "chapter": 14,
        "endChapter": 14
      },
      {
        "reference": "2 Crónicas 21:2–22:12",
        "book": 14,
        "chapter": 21,
        "endChapter": 22
      },
      {
        "reference": "Salmos 79",
        "book": 19,
        "chapter": 79,
        "endChapter": 79
      }
    ],
    "passage": "Juan 14:15–31 · 2 Crónicas 21:2–22:12 · Salmos 79",
    "theme": "12 de septiembre"
  },
  {
    "day": 256,
    "month": 9,
    "date": 13,
    "sourceReference": "Juan 15.1-16.4 / 2 Crónicas 23 / Salmos 80",
    "readings": [
      {
        "reference": "Juan 15:1–16:4",
        "book": 43,
        "chapter": 15,
        "endChapter": 16
      },
      {
        "reference": "2 Crónicas 23",
        "book": 14,
        "chapter": 23,
        "endChapter": 23
      },
      {
        "reference": "Salmos 80",
        "book": 19,
        "chapter": 80,
        "endChapter": 80
      }
    ],
    "passage": "Juan 15:1–16:4 · 2 Crónicas 23 · Salmos 80",
    "theme": "13 de septiembre"
  },
  {
    "day": 257,
    "month": 9,
    "date": 14,
    "sourceReference": "Juan 16.4-33 / 2 Crónicas 24 / Salmos 81",
    "readings": [
      {
        "reference": "Juan 16:4–33",
        "book": 43,
        "chapter": 16,
        "endChapter": 16
      },
      {
        "reference": "2 Crónicas 24",
        "book": 14,
        "chapter": 24,
        "endChapter": 24
      },
      {
        "reference": "Salmos 81",
        "book": 19,
        "chapter": 81,
        "endChapter": 81
      }
    ],
    "passage": "Juan 16:4–33 · 2 Crónicas 24 · Salmos 81",
    "theme": "14 de septiembre"
  },
  {
    "day": 258,
    "month": 9,
    "date": 15,
    "sourceReference": "Juan 17 / 2 Crónicas 25 / Salmos 82",
    "readings": [
      {
        "reference": "Juan 17",
        "book": 43,
        "chapter": 17,
        "endChapter": 17
      },
      {
        "reference": "2 Crónicas 25",
        "book": 14,
        "chapter": 25,
        "endChapter": 25
      },
      {
        "reference": "Salmos 82",
        "book": 19,
        "chapter": 82,
        "endChapter": 82
      }
    ],
    "passage": "Juan 17 · 2 Crónicas 25 · Salmos 82",
    "theme": "15 de septiembre"
  },
  {
    "day": 259,
    "month": 9,
    "date": 16,
    "sourceReference": "Juan 18.1-18 / 2 Crónicas 26 / Salmos 83",
    "readings": [
      {
        "reference": "Juan 18:1–18",
        "book": 43,
        "chapter": 18,
        "endChapter": 18
      },
      {
        "reference": "2 Crónicas 26",
        "book": 14,
        "chapter": 26,
        "endChapter": 26
      },
      {
        "reference": "Salmos 83",
        "book": 19,
        "chapter": 83,
        "endChapter": 83
      }
    ],
    "passage": "Juan 18:1–18 · 2 Crónicas 26 · Salmos 83",
    "theme": "16 de septiembre"
  },
  {
    "day": 260,
    "month": 9,
    "date": 17,
    "sourceReference": "Juan 18.19-27 / 2 Crónicas 27-28 / Salmos 84",
    "readings": [
      {
        "reference": "Juan 18:19–27",
        "book": 43,
        "chapter": 18,
        "endChapter": 18
      },
      {
        "reference": "2 Crónicas 27–28",
        "book": 14,
        "chapter": 27,
        "endChapter": 28
      },
      {
        "reference": "Salmos 84",
        "book": 19,
        "chapter": 84,
        "endChapter": 84
      }
    ],
    "passage": "Juan 18:19–27 · 2 Crónicas 27–28 · Salmos 84",
    "theme": "17 de septiembre"
  },
  {
    "day": 261,
    "month": 9,
    "date": 18,
    "sourceReference": "Juan 18.28-19.16 / 2 Crónicas 29 / Salmos 85",
    "readings": [
      {
        "reference": "Juan 18:28–19:16",
        "book": 43,
        "chapter": 18,
        "endChapter": 19
      },
      {
        "reference": "2 Crónicas 29",
        "book": 14,
        "chapter": 29,
        "endChapter": 29
      },
      {
        "reference": "Salmos 85",
        "book": 19,
        "chapter": 85,
        "endChapter": 85
      }
    ],
    "passage": "Juan 18:28–19:16 · 2 Crónicas 29 · Salmos 85",
    "theme": "18 de septiembre"
  },
  {
    "day": 262,
    "month": 9,
    "date": 19,
    "sourceReference": "Juan 19.17-42 / 2 Crónicas 30 / Salmos 86",
    "readings": [
      {
        "reference": "Juan 19:17–42",
        "book": 43,
        "chapter": 19,
        "endChapter": 19
      },
      {
        "reference": "2 Crónicas 30",
        "book": 14,
        "chapter": 30,
        "endChapter": 30
      },
      {
        "reference": "Salmos 86",
        "book": 19,
        "chapter": 86,
        "endChapter": 86
      }
    ],
    "passage": "Juan 19:17–42 · 2 Crónicas 30 · Salmos 86",
    "theme": "19 de septiembre"
  },
  {
    "day": 263,
    "month": 9,
    "date": 20,
    "sourceReference": "Juan 20.1-18 / 2 Crónicas 31 / Salmos 87",
    "readings": [
      {
        "reference": "Juan 20:1–18",
        "book": 43,
        "chapter": 20,
        "endChapter": 20
      },
      {
        "reference": "2 Crónicas 31",
        "book": 14,
        "chapter": 31,
        "endChapter": 31
      },
      {
        "reference": "Salmos 87",
        "book": 19,
        "chapter": 87,
        "endChapter": 87
      }
    ],
    "passage": "Juan 20:1–18 · 2 Crónicas 31 · Salmos 87",
    "theme": "20 de septiembre"
  },
  {
    "day": 264,
    "month": 9,
    "date": 21,
    "sourceReference": "Juan 20.19-31 / 2 Crónicas 32 / Salmos 88",
    "readings": [
      {
        "reference": "Juan 20:19–31",
        "book": 43,
        "chapter": 20,
        "endChapter": 20
      },
      {
        "reference": "2 Crónicas 32",
        "book": 14,
        "chapter": 32,
        "endChapter": 32
      },
      {
        "reference": "Salmos 88",
        "book": 19,
        "chapter": 88,
        "endChapter": 88
      }
    ],
    "passage": "Juan 20:19–31 · 2 Crónicas 32 · Salmos 88",
    "theme": "21 de septiembre"
  },
  {
    "day": 265,
    "month": 9,
    "date": 22,
    "sourceReference": "Juan 21 / 2 Crónicas 33 / Salmos 89.1-18",
    "readings": [
      {
        "reference": "Juan 21",
        "book": 43,
        "chapter": 21,
        "endChapter": 21
      },
      {
        "reference": "2 Crónicas 33",
        "book": 14,
        "chapter": 33,
        "endChapter": 33
      },
      {
        "reference": "Salmos 89:1–18",
        "book": 19,
        "chapter": 89,
        "endChapter": 89
      }
    ],
    "passage": "Juan 21 · 2 Crónicas 33 · Salmos 89:1–18",
    "theme": "22 de septiembre"
  },
  {
    "day": 266,
    "month": 9,
    "date": 23,
    "sourceReference": "1 Juan 1 / 2 Crónicas 34 / Salmos 89.19-37",
    "readings": [
      {
        "reference": "1 Juan 1",
        "book": 62,
        "chapter": 1,
        "endChapter": 1
      },
      {
        "reference": "2 Crónicas 34",
        "book": 14,
        "chapter": 34,
        "endChapter": 34
      },
      {
        "reference": "Salmos 89:19–37",
        "book": 19,
        "chapter": 89,
        "endChapter": 89
      }
    ],
    "passage": "1 Juan 1 · 2 Crónicas 34 · Salmos 89:19–37",
    "theme": "23 de septiembre"
  },
  {
    "day": 267,
    "month": 9,
    "date": 24,
    "sourceReference": "1 Juan 2 / 2 Crónicas 35 / Salmos 89.38-52",
    "readings": [
      {
        "reference": "1 Juan 2",
        "book": 62,
        "chapter": 2,
        "endChapter": 2
      },
      {
        "reference": "2 Crónicas 35",
        "book": 14,
        "chapter": 35,
        "endChapter": 35
      },
      {
        "reference": "Salmos 89:38–52",
        "book": 19,
        "chapter": 89,
        "endChapter": 89
      }
    ],
    "passage": "1 Juan 2 · 2 Crónicas 35 · Salmos 89:38–52",
    "theme": "24 de septiembre"
  },
  {
    "day": 268,
    "month": 9,
    "date": 25,
    "sourceReference": "1 Juan 3 / 2 Crónicas 36 / Salmos 90",
    "readings": [
      {
        "reference": "1 Juan 3",
        "book": 62,
        "chapter": 3,
        "endChapter": 3
      },
      {
        "reference": "2 Crónicas 36",
        "book": 14,
        "chapter": 36,
        "endChapter": 36
      },
      {
        "reference": "Salmos 90",
        "book": 19,
        "chapter": 90,
        "endChapter": 90
      }
    ],
    "passage": "1 Juan 3 · 2 Crónicas 36 · Salmos 90",
    "theme": "25 de septiembre"
  },
  {
    "day": 269,
    "month": 9,
    "date": 26,
    "sourceReference": "1 Juan 4 / Esdras 1-2 / Salmos 91",
    "readings": [
      {
        "reference": "1 Juan 4",
        "book": 62,
        "chapter": 4,
        "endChapter": 4
      },
      {
        "reference": "Esdras 1–2",
        "book": 15,
        "chapter": 1,
        "endChapter": 2
      },
      {
        "reference": "Salmos 91",
        "book": 19,
        "chapter": 91,
        "endChapter": 91
      }
    ],
    "passage": "1 Juan 4 · Esdras 1–2 · Salmos 91",
    "theme": "26 de septiembre"
  },
  {
    "day": 270,
    "month": 9,
    "date": 27,
    "sourceReference": "1 Juan 5 / Esdras 3-4 / Salmos 92",
    "readings": [
      {
        "reference": "1 Juan 5",
        "book": 62,
        "chapter": 5,
        "endChapter": 5
      },
      {
        "reference": "Esdras 3–4",
        "book": 15,
        "chapter": 3,
        "endChapter": 4
      },
      {
        "reference": "Salmos 92",
        "book": 19,
        "chapter": 92,
        "endChapter": 92
      }
    ],
    "passage": "1 Juan 5 · Esdras 3–4 · Salmos 92",
    "theme": "27 de septiembre"
  },
  {
    "day": 271,
    "month": 9,
    "date": 28,
    "sourceReference": "2 Juan / Esdras 5-6 / Salmos 93",
    "readings": [
      {
        "reference": "2 Juan",
        "book": 63,
        "chapter": 1,
        "endChapter": 1
      },
      {
        "reference": "Esdras 5–6",
        "book": 15,
        "chapter": 5,
        "endChapter": 6
      },
      {
        "reference": "Salmos 93",
        "book": 19,
        "chapter": 93,
        "endChapter": 93
      }
    ],
    "passage": "2 Juan · Esdras 5–6 · Salmos 93",
    "theme": "28 de septiembre"
  },
  {
    "day": 272,
    "month": 9,
    "date": 29,
    "sourceReference": "3 Juan / Esdras 7-8 / Salmos 94",
    "readings": [
      {
        "reference": "3 Juan",
        "book": 64,
        "chapter": 1,
        "endChapter": 1
      },
      {
        "reference": "Esdras 7–8",
        "book": 15,
        "chapter": 7,
        "endChapter": 8
      },
      {
        "reference": "Salmos 94",
        "book": 19,
        "chapter": 94,
        "endChapter": 94
      }
    ],
    "passage": "3 Juan · Esdras 7–8 · Salmos 94",
    "theme": "29 de septiembre"
  },
  {
    "day": 273,
    "month": 9,
    "date": 30,
    "sourceReference": "Judas / Esdras 9-10 / Salmos 95",
    "readings": [
      {
        "reference": "Judas",
        "book": 65,
        "chapter": 1,
        "endChapter": 1
      },
      {
        "reference": "Esdras 9–10",
        "book": 15,
        "chapter": 9,
        "endChapter": 10
      },
      {
        "reference": "Salmos 95",
        "book": 19,
        "chapter": 95,
        "endChapter": 95
      }
    ],
    "passage": "Judas · Esdras 9–10 · Salmos 95",
    "theme": "30 de septiembre"
  },
  {
    "day": 274,
    "month": 10,
    "date": 1,
    "sourceReference": "Apocalipsis 1 / Nehemías 1-2 / Salmos 96",
    "readings": [
      {
        "reference": "Apocalipsis 1",
        "book": 66,
        "chapter": 1,
        "endChapter": 1
      },
      {
        "reference": "Nehemías 1–2",
        "book": 16,
        "chapter": 1,
        "endChapter": 2
      },
      {
        "reference": "Salmos 96",
        "book": 19,
        "chapter": 96,
        "endChapter": 96
      }
    ],
    "passage": "Apocalipsis 1 · Nehemías 1–2 · Salmos 96",
    "theme": "1 de octubre"
  },
  {
    "day": 275,
    "month": 10,
    "date": 2,
    "sourceReference": "Apocalipsis 2 / Nehemías 3 / Salmos 97",
    "readings": [
      {
        "reference": "Apocalipsis 2",
        "book": 66,
        "chapter": 2,
        "endChapter": 2
      },
      {
        "reference": "Nehemías 3",
        "book": 16,
        "chapter": 3,
        "endChapter": 3
      },
      {
        "reference": "Salmos 97",
        "book": 19,
        "chapter": 97,
        "endChapter": 97
      }
    ],
    "passage": "Apocalipsis 2 · Nehemías 3 · Salmos 97",
    "theme": "2 de octubre"
  },
  {
    "day": 276,
    "month": 10,
    "date": 3,
    "sourceReference": "Apocalipsis 3 / Nehemías 4 / Salmos 98",
    "readings": [
      {
        "reference": "Apocalipsis 3",
        "book": 66,
        "chapter": 3,
        "endChapter": 3
      },
      {
        "reference": "Nehemías 4",
        "book": 16,
        "chapter": 4,
        "endChapter": 4
      },
      {
        "reference": "Salmos 98",
        "book": 19,
        "chapter": 98,
        "endChapter": 98
      }
    ],
    "passage": "Apocalipsis 3 · Nehemías 4 · Salmos 98",
    "theme": "3 de octubre"
  },
  {
    "day": 277,
    "month": 10,
    "date": 4,
    "sourceReference": "Apocalipsis 4 / Nehemías 5.1-7.3 / Salmos 99",
    "readings": [
      {
        "reference": "Apocalipsis 4",
        "book": 66,
        "chapter": 4,
        "endChapter": 4
      },
      {
        "reference": "Nehemías 5:1–7:3",
        "book": 16,
        "chapter": 5,
        "endChapter": 7
      },
      {
        "reference": "Salmos 99",
        "book": 19,
        "chapter": 99,
        "endChapter": 99
      }
    ],
    "passage": "Apocalipsis 4 · Nehemías 5:1–7:3 · Salmos 99",
    "theme": "4 de octubre"
  },
  {
    "day": 278,
    "month": 10,
    "date": 5,
    "sourceReference": "Apocalipsis 5 / Nehemías 7.4-8.12 / Salmos 100",
    "readings": [
      {
        "reference": "Apocalipsis 5",
        "book": 66,
        "chapter": 5,
        "endChapter": 5
      },
      {
        "reference": "Nehemías 7:4–8:12",
        "book": 16,
        "chapter": 7,
        "endChapter": 8
      },
      {
        "reference": "Salmos 100",
        "book": 19,
        "chapter": 100,
        "endChapter": 100
      }
    ],
    "passage": "Apocalipsis 5 · Nehemías 7:4–8:12 · Salmos 100",
    "theme": "5 de octubre"
  },
  {
    "day": 279,
    "month": 10,
    "date": 6,
    "sourceReference": "Apocalipsis 6 / Nehemías 8.13-9.37 / Salmos 101",
    "readings": [
      {
        "reference": "Apocalipsis 6",
        "book": 66,
        "chapter": 6,
        "endChapter": 6
      },
      {
        "reference": "Nehemías 8:13–9:37",
        "book": 16,
        "chapter": 8,
        "endChapter": 9
      },
      {
        "reference": "Salmos 101",
        "book": 19,
        "chapter": 101,
        "endChapter": 101
      }
    ],
    "passage": "Apocalipsis 6 · Nehemías 8:13–9:37 · Salmos 101",
    "theme": "6 de octubre"
  },
  {
    "day": 280,
    "month": 10,
    "date": 7,
    "sourceReference": "Apocalipsis 7 / Nehemías 9.38-10.39 / Salmos 102",
    "readings": [
      {
        "reference": "Apocalipsis 7",
        "book": 66,
        "chapter": 7,
        "endChapter": 7
      },
      {
        "reference": "Nehemías 9:38–10:39",
        "book": 16,
        "chapter": 9,
        "endChapter": 10
      },
      {
        "reference": "Salmos 102",
        "book": 19,
        "chapter": 102,
        "endChapter": 102
      }
    ],
    "passage": "Apocalipsis 7 · Nehemías 9:38–10:39 · Salmos 102",
    "theme": "7 de octubre"
  },
  {
    "day": 281,
    "month": 10,
    "date": 8,
    "sourceReference": "Apocalipsis 8 / Nehemías 11 / Salmos 103",
    "readings": [
      {
        "reference": "Apocalipsis 8",
        "book": 66,
        "chapter": 8,
        "endChapter": 8
      },
      {
        "reference": "Nehemías 11",
        "book": 16,
        "chapter": 11,
        "endChapter": 11
      },
      {
        "reference": "Salmos 103",
        "book": 19,
        "chapter": 103,
        "endChapter": 103
      }
    ],
    "passage": "Apocalipsis 8 · Nehemías 11 · Salmos 103",
    "theme": "8 de octubre"
  },
  {
    "day": 282,
    "month": 10,
    "date": 9,
    "sourceReference": "Apocalipsis 9 / Nehemías 12 / Salmos 104.1-23",
    "readings": [
      {
        "reference": "Apocalipsis 9",
        "book": 66,
        "chapter": 9,
        "endChapter": 9
      },
      {
        "reference": "Nehemías 12",
        "book": 16,
        "chapter": 12,
        "endChapter": 12
      },
      {
        "reference": "Salmos 104:1–23",
        "book": 19,
        "chapter": 104,
        "endChapter": 104
      }
    ],
    "passage": "Apocalipsis 9 · Nehemías 12 · Salmos 104:1–23",
    "theme": "9 de octubre"
  },
  {
    "day": 283,
    "month": 10,
    "date": 10,
    "sourceReference": "Apocalipsis 10 / Nehemías 13 / Salmos 104.24-35",
    "readings": [
      {
        "reference": "Apocalipsis 10",
        "book": 66,
        "chapter": 10,
        "endChapter": 10
      },
      {
        "reference": "Nehemías 13",
        "book": 16,
        "chapter": 13,
        "endChapter": 13
      },
      {
        "reference": "Salmos 104:24–35",
        "book": 19,
        "chapter": 104,
        "endChapter": 104
      }
    ],
    "passage": "Apocalipsis 10 · Nehemías 13 · Salmos 104:24–35",
    "theme": "10 de octubre"
  },
  {
    "day": 284,
    "month": 10,
    "date": 11,
    "sourceReference": "Apocalipsis 11 / Ester 1 / Salmos 105.1-25",
    "readings": [
      {
        "reference": "Apocalipsis 11",
        "book": 66,
        "chapter": 11,
        "endChapter": 11
      },
      {
        "reference": "Ester 1",
        "book": 17,
        "chapter": 1,
        "endChapter": 1
      },
      {
        "reference": "Salmos 105:1–25",
        "book": 19,
        "chapter": 105,
        "endChapter": 105
      }
    ],
    "passage": "Apocalipsis 11 · Ester 1 · Salmos 105:1–25",
    "theme": "11 de octubre"
  },
  {
    "day": 285,
    "month": 10,
    "date": 12,
    "sourceReference": "Apocalipsis 12 / Ester 2 / Salmos 105.26-45",
    "readings": [
      {
        "reference": "Apocalipsis 12",
        "book": 66,
        "chapter": 12,
        "endChapter": 12
      },
      {
        "reference": "Ester 2",
        "book": 17,
        "chapter": 2,
        "endChapter": 2
      },
      {
        "reference": "Salmos 105:26–45",
        "book": 19,
        "chapter": 105,
        "endChapter": 105
      }
    ],
    "passage": "Apocalipsis 12 · Ester 2 · Salmos 105:26–45",
    "theme": "12 de octubre"
  },
  {
    "day": 286,
    "month": 10,
    "date": 13,
    "sourceReference": "Apocalipsis 13 / Ester 3-4 / Salmos 106.1-23",
    "readings": [
      {
        "reference": "Apocalipsis 13",
        "book": 66,
        "chapter": 13,
        "endChapter": 13
      },
      {
        "reference": "Ester 3–4",
        "book": 17,
        "chapter": 3,
        "endChapter": 4
      },
      {
        "reference": "Salmos 106:1–23",
        "book": 19,
        "chapter": 106,
        "endChapter": 106
      }
    ],
    "passage": "Apocalipsis 13 · Ester 3–4 · Salmos 106:1–23",
    "theme": "13 de octubre"
  },
  {
    "day": 287,
    "month": 10,
    "date": 14,
    "sourceReference": "Apocalipsis 14 / Ester 5.1-6.13 / Salmos 106.24-48",
    "readings": [
      {
        "reference": "Apocalipsis 14",
        "book": 66,
        "chapter": 14,
        "endChapter": 14
      },
      {
        "reference": "Ester 5:1–6:13",
        "book": 17,
        "chapter": 5,
        "endChapter": 6
      },
      {
        "reference": "Salmos 106:24–48",
        "book": 19,
        "chapter": 106,
        "endChapter": 106
      }
    ],
    "passage": "Apocalipsis 14 · Ester 5:1–6:13 · Salmos 106:24–48",
    "theme": "14 de octubre"
  },
  {
    "day": 288,
    "month": 10,
    "date": 15,
    "sourceReference": "Apocalipsis 15 / Ester 6.14-8.17 / Salmos 107.1-22",
    "readings": [
      {
        "reference": "Apocalipsis 15",
        "book": 66,
        "chapter": 15,
        "endChapter": 15
      },
      {
        "reference": "Ester 6:14–8:17",
        "book": 17,
        "chapter": 6,
        "endChapter": 8
      },
      {
        "reference": "Salmos 107:1–22",
        "book": 19,
        "chapter": 107,
        "endChapter": 107
      }
    ],
    "passage": "Apocalipsis 15 · Ester 6:14–8:17 · Salmos 107:1–22",
    "theme": "15 de octubre"
  },
  {
    "day": 289,
    "month": 10,
    "date": 16,
    "sourceReference": "Apocalipsis 16 / Ester 9-10 / Salmos 107.23-43",
    "readings": [
      {
        "reference": "Apocalipsis 16",
        "book": 66,
        "chapter": 16,
        "endChapter": 16
      },
      {
        "reference": "Ester 9–10",
        "book": 17,
        "chapter": 9,
        "endChapter": 10
      },
      {
        "reference": "Salmos 107:23–43",
        "book": 19,
        "chapter": 107,
        "endChapter": 107
      }
    ],
    "passage": "Apocalipsis 16 · Ester 9–10 · Salmos 107:23–43",
    "theme": "16 de octubre"
  },
  {
    "day": 290,
    "month": 10,
    "date": 17,
    "sourceReference": "Apocalipsis 17 / Isaías 1-2 / Salmos 108",
    "readings": [
      {
        "reference": "Apocalipsis 17",
        "book": 66,
        "chapter": 17,
        "endChapter": 17
      },
      {
        "reference": "Isaías 1–2",
        "book": 23,
        "chapter": 1,
        "endChapter": 2
      },
      {
        "reference": "Salmos 108",
        "book": 19,
        "chapter": 108,
        "endChapter": 108
      }
    ],
    "passage": "Apocalipsis 17 · Isaías 1–2 · Salmos 108",
    "theme": "17 de octubre"
  },
  {
    "day": 291,
    "month": 10,
    "date": 18,
    "sourceReference": "Apocalipsis 18 / Isaías 3-4 / Salmos 109.1-19",
    "readings": [
      {
        "reference": "Apocalipsis 18",
        "book": 66,
        "chapter": 18,
        "endChapter": 18
      },
      {
        "reference": "Isaías 3–4",
        "book": 23,
        "chapter": 3,
        "endChapter": 4
      },
      {
        "reference": "Salmos 109:1–19",
        "book": 19,
        "chapter": 109,
        "endChapter": 109
      }
    ],
    "passage": "Apocalipsis 18 · Isaías 3–4 · Salmos 109:1–19",
    "theme": "18 de octubre"
  },
  {
    "day": 292,
    "month": 10,
    "date": 19,
    "sourceReference": "Apocalipsis 19 / Isaías 5-6 / Salmos 109.20-31",
    "readings": [
      {
        "reference": "Apocalipsis 19",
        "book": 66,
        "chapter": 19,
        "endChapter": 19
      },
      {
        "reference": "Isaías 5–6",
        "book": 23,
        "chapter": 5,
        "endChapter": 6
      },
      {
        "reference": "Salmos 109:20–31",
        "book": 19,
        "chapter": 109,
        "endChapter": 109
      }
    ],
    "passage": "Apocalipsis 19 · Isaías 5–6 · Salmos 109:20–31",
    "theme": "19 de octubre"
  },
  {
    "day": 293,
    "month": 10,
    "date": 20,
    "sourceReference": "Apocalipsis 20 / Isaías 7-8 / Salmos 110",
    "readings": [
      {
        "reference": "Apocalipsis 20",
        "book": 66,
        "chapter": 20,
        "endChapter": 20
      },
      {
        "reference": "Isaías 7–8",
        "book": 23,
        "chapter": 7,
        "endChapter": 8
      },
      {
        "reference": "Salmos 110",
        "book": 19,
        "chapter": 110,
        "endChapter": 110
      }
    ],
    "passage": "Apocalipsis 20 · Isaías 7–8 · Salmos 110",
    "theme": "20 de octubre"
  },
  {
    "day": 294,
    "month": 10,
    "date": 21,
    "sourceReference": "Apocalipsis 21-22 / Isaías 9-10 / Salmos 111",
    "readings": [
      {
        "reference": "Apocalipsis 21–22",
        "book": 66,
        "chapter": 21,
        "endChapter": 22
      },
      {
        "reference": "Isaías 9–10",
        "book": 23,
        "chapter": 9,
        "endChapter": 10
      },
      {
        "reference": "Salmos 111",
        "book": 19,
        "chapter": 111,
        "endChapter": 111
      }
    ],
    "passage": "Apocalipsis 21–22 · Isaías 9–10 · Salmos 111",
    "theme": "21 de octubre"
  },
  {
    "day": 295,
    "month": 10,
    "date": 22,
    "sourceReference": "1 Tesalonicenses 1 / Isaías 11-13 / Salmos 112",
    "readings": [
      {
        "reference": "1 Tesalonicenses 1",
        "book": 52,
        "chapter": 1,
        "endChapter": 1
      },
      {
        "reference": "Isaías 11–13",
        "book": 23,
        "chapter": 11,
        "endChapter": 13
      },
      {
        "reference": "Salmos 112",
        "book": 19,
        "chapter": 112,
        "endChapter": 112
      }
    ],
    "passage": "1 Tesalonicenses 1 · Isaías 11–13 · Salmos 112",
    "theme": "22 de octubre"
  },
  {
    "day": 296,
    "month": 10,
    "date": 23,
    "sourceReference": "1 Tesalonicenses 2.1-16 / Isaías 14-16 / Salmos 113",
    "readings": [
      {
        "reference": "1 Tesalonicenses 2:1–16",
        "book": 52,
        "chapter": 2,
        "endChapter": 2
      },
      {
        "reference": "Isaías 14–16",
        "book": 23,
        "chapter": 14,
        "endChapter": 16
      },
      {
        "reference": "Salmos 113",
        "book": 19,
        "chapter": 113,
        "endChapter": 113
      }
    ],
    "passage": "1 Tesalonicenses 2:1–16 · Isaías 14–16 · Salmos 113",
    "theme": "23 de octubre"
  },
  {
    "day": 297,
    "month": 10,
    "date": 24,
    "sourceReference": "1 Tesalonicenses 2.17-3.13 / Isaías 17-19 / Salmos 114",
    "readings": [
      {
        "reference": "1 Tesalonicenses 2:17–3:13",
        "book": 52,
        "chapter": 2,
        "endChapter": 3
      },
      {
        "reference": "Isaías 17–19",
        "book": 23,
        "chapter": 17,
        "endChapter": 19
      },
      {
        "reference": "Salmos 114",
        "book": 19,
        "chapter": 114,
        "endChapter": 114
      }
    ],
    "passage": "1 Tesalonicenses 2:17–3:13 · Isaías 17–19 · Salmos 114",
    "theme": "24 de octubre"
  },
  {
    "day": 298,
    "month": 10,
    "date": 25,
    "sourceReference": "1 Tesalonicenses 4 / Isaías 20-22 / Salmos 115",
    "readings": [
      {
        "reference": "1 Tesalonicenses 4",
        "book": 52,
        "chapter": 4,
        "endChapter": 4
      },
      {
        "reference": "Isaías 20–22",
        "book": 23,
        "chapter": 20,
        "endChapter": 22
      },
      {
        "reference": "Salmos 115",
        "book": 19,
        "chapter": 115,
        "endChapter": 115
      }
    ],
    "passage": "1 Tesalonicenses 4 · Isaías 20–22 · Salmos 115",
    "theme": "25 de octubre"
  },
  {
    "day": 299,
    "month": 10,
    "date": 26,
    "sourceReference": "1 Tesalonicenses 5 / Isaías 23-24 / Salmos 116",
    "readings": [
      {
        "reference": "1 Tesalonicenses 5",
        "book": 52,
        "chapter": 5,
        "endChapter": 5
      },
      {
        "reference": "Isaías 23–24",
        "book": 23,
        "chapter": 23,
        "endChapter": 24
      },
      {
        "reference": "Salmos 116",
        "book": 19,
        "chapter": 116,
        "endChapter": 116
      }
    ],
    "passage": "1 Tesalonicenses 5 · Isaías 23–24 · Salmos 116",
    "theme": "26 de octubre"
  },
  {
    "day": 300,
    "month": 10,
    "date": 27,
    "sourceReference": "2 Tesalonicenses 1 / Isaías 25-26 / Salmos 117",
    "readings": [
      {
        "reference": "2 Tesalonicenses 1",
        "book": 53,
        "chapter": 1,
        "endChapter": 1
      },
      {
        "reference": "Isaías 25–26",
        "book": 23,
        "chapter": 25,
        "endChapter": 26
      },
      {
        "reference": "Salmos 117",
        "book": 19,
        "chapter": 117,
        "endChapter": 117
      }
    ],
    "passage": "2 Tesalonicenses 1 · Isaías 25–26 · Salmos 117",
    "theme": "27 de octubre"
  },
  {
    "day": 301,
    "month": 10,
    "date": 28,
    "sourceReference": "2 Tesalonicenses 2 / Isaías 27-28 / Salmos 118",
    "readings": [
      {
        "reference": "2 Tesalonicenses 2",
        "book": 53,
        "chapter": 2,
        "endChapter": 2
      },
      {
        "reference": "Isaías 27–28",
        "book": 23,
        "chapter": 27,
        "endChapter": 28
      },
      {
        "reference": "Salmos 118",
        "book": 19,
        "chapter": 118,
        "endChapter": 118
      }
    ],
    "passage": "2 Tesalonicenses 2 · Isaías 27–28 · Salmos 118",
    "theme": "28 de octubre"
  },
  {
    "day": 302,
    "month": 10,
    "date": 29,
    "sourceReference": "2 Tesalonicenses 3 / Isaías 29-30 / Salmos 119.1-32",
    "readings": [
      {
        "reference": "2 Tesalonicenses 3",
        "book": 53,
        "chapter": 3,
        "endChapter": 3
      },
      {
        "reference": "Isaías 29–30",
        "book": 23,
        "chapter": 29,
        "endChapter": 30
      },
      {
        "reference": "Salmos 119:1–32",
        "book": 19,
        "chapter": 119,
        "endChapter": 119
      }
    ],
    "passage": "2 Tesalonicenses 3 · Isaías 29–30 · Salmos 119:1–32",
    "theme": "29 de octubre"
  },
  {
    "day": 303,
    "month": 10,
    "date": 30,
    "sourceReference": "1 Timoteo 1 / Isaías 31-33 / Salmos 119.33-64",
    "readings": [
      {
        "reference": "1 Timoteo 1",
        "book": 54,
        "chapter": 1,
        "endChapter": 1
      },
      {
        "reference": "Isaías 31–33",
        "book": 23,
        "chapter": 31,
        "endChapter": 33
      },
      {
        "reference": "Salmos 119:33–64",
        "book": 19,
        "chapter": 119,
        "endChapter": 119
      }
    ],
    "passage": "1 Timoteo 1 · Isaías 31–33 · Salmos 119:33–64",
    "theme": "30 de octubre"
  },
  {
    "day": 304,
    "month": 10,
    "date": 31,
    "sourceReference": "1 Timoteo 2 / Isaías 34-35 / Salmos 119.65-96",
    "readings": [
      {
        "reference": "1 Timoteo 2",
        "book": 54,
        "chapter": 2,
        "endChapter": 2
      },
      {
        "reference": "Isaías 34–35",
        "book": 23,
        "chapter": 34,
        "endChapter": 35
      },
      {
        "reference": "Salmos 119:65–96",
        "book": 19,
        "chapter": 119,
        "endChapter": 119
      }
    ],
    "passage": "1 Timoteo 2 · Isaías 34–35 · Salmos 119:65–96",
    "theme": "31 de octubre"
  },
  {
    "day": 305,
    "month": 11,
    "date": 1,
    "sourceReference": "1 Timoteo 3 / Isaías 36-37 / Salmos 119.97-120",
    "readings": [
      {
        "reference": "1 Timoteo 3",
        "book": 54,
        "chapter": 3,
        "endChapter": 3
      },
      {
        "reference": "Isaías 36–37",
        "book": 23,
        "chapter": 36,
        "endChapter": 37
      },
      {
        "reference": "Salmos 119:97–120",
        "book": 19,
        "chapter": 119,
        "endChapter": 119
      }
    ],
    "passage": "1 Timoteo 3 · Isaías 36–37 · Salmos 119:97–120",
    "theme": "1 de noviembre"
  },
  {
    "day": 306,
    "month": 11,
    "date": 2,
    "sourceReference": "1 Timoteo 4 / Isaías 38-39 / Salmos 119.121-144",
    "readings": [
      {
        "reference": "1 Timoteo 4",
        "book": 54,
        "chapter": 4,
        "endChapter": 4
      },
      {
        "reference": "Isaías 38–39",
        "book": 23,
        "chapter": 38,
        "endChapter": 39
      },
      {
        "reference": "Salmos 119:121–144",
        "book": 19,
        "chapter": 119,
        "endChapter": 119
      }
    ],
    "passage": "1 Timoteo 4 · Isaías 38–39 · Salmos 119:121–144",
    "theme": "2 de noviembre"
  },
  {
    "day": 307,
    "month": 11,
    "date": 3,
    "sourceReference": "1 Timoteo 5.1-20 / Jeremías 1-2 / Salmos 119.145-176",
    "readings": [
      {
        "reference": "1 Timoteo 5:1–20",
        "book": 54,
        "chapter": 5,
        "endChapter": 5
      },
      {
        "reference": "Jeremías 1–2",
        "book": 24,
        "chapter": 1,
        "endChapter": 2
      },
      {
        "reference": "Salmos 119:145–176",
        "book": 19,
        "chapter": 119,
        "endChapter": 119
      }
    ],
    "passage": "1 Timoteo 5:1–20 · Jeremías 1–2 · Salmos 119:145–176",
    "theme": "3 de noviembre"
  },
  {
    "day": 308,
    "month": 11,
    "date": 4,
    "sourceReference": "1 Timoteo 5.21-6.21 / Jeremías 3-4 / Salmos 120",
    "readings": [
      {
        "reference": "1 Timoteo 5:21–6:21",
        "book": 54,
        "chapter": 5,
        "endChapter": 6
      },
      {
        "reference": "Jeremías 3–4",
        "book": 24,
        "chapter": 3,
        "endChapter": 4
      },
      {
        "reference": "Salmos 120",
        "book": 19,
        "chapter": 120,
        "endChapter": 120
      }
    ],
    "passage": "1 Timoteo 5:21–6:21 · Jeremías 3–4 · Salmos 120",
    "theme": "4 de noviembre"
  },
  {
    "day": 309,
    "month": 11,
    "date": 5,
    "sourceReference": "2 Timoteo 1 / Jeremías 5-6 / Salmos 121",
    "readings": [
      {
        "reference": "2 Timoteo 1",
        "book": 55,
        "chapter": 1,
        "endChapter": 1
      },
      {
        "reference": "Jeremías 5–6",
        "book": 24,
        "chapter": 5,
        "endChapter": 6
      },
      {
        "reference": "Salmos 121",
        "book": 19,
        "chapter": 121,
        "endChapter": 121
      }
    ],
    "passage": "2 Timoteo 1 · Jeremías 5–6 · Salmos 121",
    "theme": "5 de noviembre"
  },
  {
    "day": 310,
    "month": 11,
    "date": 6,
    "sourceReference": "2 Timoteo 2 / Jeremías 7-8 / Salmos 122",
    "readings": [
      {
        "reference": "2 Timoteo 2",
        "book": 55,
        "chapter": 2,
        "endChapter": 2
      },
      {
        "reference": "Jeremías 7–8",
        "book": 24,
        "chapter": 7,
        "endChapter": 8
      },
      {
        "reference": "Salmos 122",
        "book": 19,
        "chapter": 122,
        "endChapter": 122
      }
    ],
    "passage": "2 Timoteo 2 · Jeremías 7–8 · Salmos 122",
    "theme": "6 de noviembre"
  },
  {
    "day": 311,
    "month": 11,
    "date": 7,
    "sourceReference": "2 Timoteo 3 / Jeremías 9-10 / Salmos 123",
    "readings": [
      {
        "reference": "2 Timoteo 3",
        "book": 55,
        "chapter": 3,
        "endChapter": 3
      },
      {
        "reference": "Jeremías 9–10",
        "book": 24,
        "chapter": 9,
        "endChapter": 10
      },
      {
        "reference": "Salmos 123",
        "book": 19,
        "chapter": 123,
        "endChapter": 123
      }
    ],
    "passage": "2 Timoteo 3 · Jeremías 9–10 · Salmos 123",
    "theme": "7 de noviembre"
  },
  {
    "day": 312,
    "month": 11,
    "date": 8,
    "sourceReference": "2 Timoteo 4 / Jeremías 11-12 / Salmos 124",
    "readings": [
      {
        "reference": "2 Timoteo 4",
        "book": 55,
        "chapter": 4,
        "endChapter": 4
      },
      {
        "reference": "Jeremías 11–12",
        "book": 24,
        "chapter": 11,
        "endChapter": 12
      },
      {
        "reference": "Salmos 124",
        "book": 19,
        "chapter": 124,
        "endChapter": 124
      }
    ],
    "passage": "2 Timoteo 4 · Jeremías 11–12 · Salmos 124",
    "theme": "8 de noviembre"
  },
  {
    "day": 313,
    "month": 11,
    "date": 9,
    "sourceReference": "Tito 1 / Jeremías 13-14 / Salmos 125",
    "readings": [
      {
        "reference": "Tito 1",
        "book": 56,
        "chapter": 1,
        "endChapter": 1
      },
      {
        "reference": "Jeremías 13–14",
        "book": 24,
        "chapter": 13,
        "endChapter": 14
      },
      {
        "reference": "Salmos 125",
        "book": 19,
        "chapter": 125,
        "endChapter": 125
      }
    ],
    "passage": "Tito 1 · Jeremías 13–14 · Salmos 125",
    "theme": "9 de noviembre"
  },
  {
    "day": 314,
    "month": 11,
    "date": 10,
    "sourceReference": "Tito 2 / Jeremías 15-16 / Salmos 126",
    "readings": [
      {
        "reference": "Tito 2",
        "book": 56,
        "chapter": 2,
        "endChapter": 2
      },
      {
        "reference": "Jeremías 15–16",
        "book": 24,
        "chapter": 15,
        "endChapter": 16
      },
      {
        "reference": "Salmos 126",
        "book": 19,
        "chapter": 126,
        "endChapter": 126
      }
    ],
    "passage": "Tito 2 · Jeremías 15–16 · Salmos 126",
    "theme": "10 de noviembre"
  },
  {
    "day": 315,
    "month": 11,
    "date": 11,
    "sourceReference": "Tito 3 / Jeremías 17-18 / Salmos 127",
    "readings": [
      {
        "reference": "Tito 3",
        "book": 56,
        "chapter": 3,
        "endChapter": 3
      },
      {
        "reference": "Jeremías 17–18",
        "book": 24,
        "chapter": 17,
        "endChapter": 18
      },
      {
        "reference": "Salmos 127",
        "book": 19,
        "chapter": 127,
        "endChapter": 127
      }
    ],
    "passage": "Tito 3 · Jeremías 17–18 · Salmos 127",
    "theme": "11 de noviembre"
  },
  {
    "day": 316,
    "month": 11,
    "date": 12,
    "sourceReference": "Filemón / Jeremías 19-20 / Salmos 128",
    "readings": [
      {
        "reference": "Filemón",
        "book": 57,
        "chapter": 1,
        "endChapter": 1
      },
      {
        "reference": "Jeremías 19–20",
        "book": 24,
        "chapter": 19,
        "endChapter": 20
      },
      {
        "reference": "Salmos 128",
        "book": 19,
        "chapter": 128,
        "endChapter": 128
      }
    ],
    "passage": "Filemón · Jeremías 19–20 · Salmos 128",
    "theme": "12 de noviembre"
  },
  {
    "day": 317,
    "month": 11,
    "date": 13,
    "sourceReference": "Santiago 1 / Jeremías 21-22 / Salmos 129",
    "readings": [
      {
        "reference": "Santiago 1",
        "book": 59,
        "chapter": 1,
        "endChapter": 1
      },
      {
        "reference": "Jeremías 21–22",
        "book": 24,
        "chapter": 21,
        "endChapter": 22
      },
      {
        "reference": "Salmos 129",
        "book": 19,
        "chapter": 129,
        "endChapter": 129
      }
    ],
    "passage": "Santiago 1 · Jeremías 21–22 · Salmos 129",
    "theme": "13 de noviembre"
  },
  {
    "day": 318,
    "month": 11,
    "date": 14,
    "sourceReference": "Santiago 2 / Jeremías 23-24 / Salmos 130",
    "readings": [
      {
        "reference": "Santiago 2",
        "book": 59,
        "chapter": 2,
        "endChapter": 2
      },
      {
        "reference": "Jeremías 23–24",
        "book": 24,
        "chapter": 23,
        "endChapter": 24
      },
      {
        "reference": "Salmos 130",
        "book": 19,
        "chapter": 130,
        "endChapter": 130
      }
    ],
    "passage": "Santiago 2 · Jeremías 23–24 · Salmos 130",
    "theme": "14 de noviembre"
  },
  {
    "day": 319,
    "month": 11,
    "date": 15,
    "sourceReference": "Santiago 3 / Jeremías 25-26 / Salmos 131",
    "readings": [
      {
        "reference": "Santiago 3",
        "book": 59,
        "chapter": 3,
        "endChapter": 3
      },
      {
        "reference": "Jeremías 25–26",
        "book": 24,
        "chapter": 25,
        "endChapter": 26
      },
      {
        "reference": "Salmos 131",
        "book": 19,
        "chapter": 131,
        "endChapter": 131
      }
    ],
    "passage": "Santiago 3 · Jeremías 25–26 · Salmos 131",
    "theme": "15 de noviembre"
  },
  {
    "day": 320,
    "month": 11,
    "date": 16,
    "sourceReference": "Santiago 4 / Jeremías 27-28 / Salmos 132",
    "readings": [
      {
        "reference": "Santiago 4",
        "book": 59,
        "chapter": 4,
        "endChapter": 4
      },
      {
        "reference": "Jeremías 27–28",
        "book": 24,
        "chapter": 27,
        "endChapter": 28
      },
      {
        "reference": "Salmos 132",
        "book": 19,
        "chapter": 132,
        "endChapter": 132
      }
    ],
    "passage": "Santiago 4 · Jeremías 27–28 · Salmos 132",
    "theme": "16 de noviembre"
  },
  {
    "day": 321,
    "month": 11,
    "date": 17,
    "sourceReference": "Santiago 5 / Jeremías 29-30 / Salmos 133",
    "readings": [
      {
        "reference": "Santiago 5",
        "book": 59,
        "chapter": 5,
        "endChapter": 5
      },
      {
        "reference": "Jeremías 29–30",
        "book": 24,
        "chapter": 29,
        "endChapter": 30
      },
      {
        "reference": "Salmos 133",
        "book": 19,
        "chapter": 133,
        "endChapter": 133
      }
    ],
    "passage": "Santiago 5 · Jeremías 29–30 · Salmos 133",
    "theme": "17 de noviembre"
  },
  {
    "day": 322,
    "month": 11,
    "date": 18,
    "sourceReference": "1 Pedro 1 / Jeremías 31-32 / Salmos 134",
    "readings": [
      {
        "reference": "1 Pedro 1",
        "book": 60,
        "chapter": 1,
        "endChapter": 1
      },
      {
        "reference": "Jeremías 31–32",
        "book": 24,
        "chapter": 31,
        "endChapter": 32
      },
      {
        "reference": "Salmos 134",
        "book": 19,
        "chapter": 134,
        "endChapter": 134
      }
    ],
    "passage": "1 Pedro 1 · Jeremías 31–32 · Salmos 134",
    "theme": "18 de noviembre"
  },
  {
    "day": 323,
    "month": 11,
    "date": 19,
    "sourceReference": "1 Pedro 2 / Jeremías 33-34 / Salmos 135",
    "readings": [
      {
        "reference": "1 Pedro 2",
        "book": 60,
        "chapter": 2,
        "endChapter": 2
      },
      {
        "reference": "Jeremías 33–34",
        "book": 24,
        "chapter": 33,
        "endChapter": 34
      },
      {
        "reference": "Salmos 135",
        "book": 19,
        "chapter": 135,
        "endChapter": 135
      }
    ],
    "passage": "1 Pedro 2 · Jeremías 33–34 · Salmos 135",
    "theme": "19 de noviembre"
  },
  {
    "day": 324,
    "month": 11,
    "date": 20,
    "sourceReference": "1 Pedro 3 / Jeremías 35-36 / Salmos 136",
    "readings": [
      {
        "reference": "1 Pedro 3",
        "book": 60,
        "chapter": 3,
        "endChapter": 3
      },
      {
        "reference": "Jeremías 35–36",
        "book": 24,
        "chapter": 35,
        "endChapter": 36
      },
      {
        "reference": "Salmos 136",
        "book": 19,
        "chapter": 136,
        "endChapter": 136
      }
    ],
    "passage": "1 Pedro 3 · Jeremías 35–36 · Salmos 136",
    "theme": "20 de noviembre"
  },
  {
    "day": 325,
    "month": 11,
    "date": 21,
    "sourceReference": "1 Pedro 4 / Jeremías 37-38 / Salmos 137",
    "readings": [
      {
        "reference": "1 Pedro 4",
        "book": 60,
        "chapter": 4,
        "endChapter": 4
      },
      {
        "reference": "Jeremías 37–38",
        "book": 24,
        "chapter": 37,
        "endChapter": 38
      },
      {
        "reference": "Salmos 137",
        "book": 19,
        "chapter": 137,
        "endChapter": 137
      }
    ],
    "passage": "1 Pedro 4 · Jeremías 37–38 · Salmos 137",
    "theme": "21 de noviembre"
  },
  {
    "day": 326,
    "month": 11,
    "date": 22,
    "sourceReference": "1 Pedro 5 / Jeremías 39-40 / Salmos 138",
    "readings": [
      {
        "reference": "1 Pedro 5",
        "book": 60,
        "chapter": 5,
        "endChapter": 5
      },
      {
        "reference": "Jeremías 39–40",
        "book": 24,
        "chapter": 39,
        "endChapter": 40
      },
      {
        "reference": "Salmos 138",
        "book": 19,
        "chapter": 138,
        "endChapter": 138
      }
    ],
    "passage": "1 Pedro 5 · Jeremías 39–40 · Salmos 138",
    "theme": "22 de noviembre"
  },
  {
    "day": 327,
    "month": 11,
    "date": 23,
    "sourceReference": "2 Pedro 1 / Jeremías 41-42 / Salmos 139",
    "readings": [
      {
        "reference": "2 Pedro 1",
        "book": 61,
        "chapter": 1,
        "endChapter": 1
      },
      {
        "reference": "Jeremías 41–42",
        "book": 24,
        "chapter": 41,
        "endChapter": 42
      },
      {
        "reference": "Salmos 139",
        "book": 19,
        "chapter": 139,
        "endChapter": 139
      }
    ],
    "passage": "2 Pedro 1 · Jeremías 41–42 · Salmos 139",
    "theme": "23 de noviembre"
  },
  {
    "day": 328,
    "month": 11,
    "date": 24,
    "sourceReference": "2 Pedro 2 / Jeremías 43-44 / Salmos 140",
    "readings": [
      {
        "reference": "2 Pedro 2",
        "book": 61,
        "chapter": 2,
        "endChapter": 2
      },
      {
        "reference": "Jeremías 43–44",
        "book": 24,
        "chapter": 43,
        "endChapter": 44
      },
      {
        "reference": "Salmos 140",
        "book": 19,
        "chapter": 140,
        "endChapter": 140
      }
    ],
    "passage": "2 Pedro 2 · Jeremías 43–44 · Salmos 140",
    "theme": "24 de noviembre"
  },
  {
    "day": 329,
    "month": 11,
    "date": 25,
    "sourceReference": "2 Pedro 3 / Jeremías 45-46 / Salmos 141",
    "readings": [
      {
        "reference": "2 Pedro 3",
        "book": 61,
        "chapter": 3,
        "endChapter": 3
      },
      {
        "reference": "Jeremías 45–46",
        "book": 24,
        "chapter": 45,
        "endChapter": 46
      },
      {
        "reference": "Salmos 141",
        "book": 19,
        "chapter": 141,
        "endChapter": 141
      }
    ],
    "passage": "2 Pedro 3 · Jeremías 45–46 · Salmos 141",
    "theme": "25 de noviembre"
  },
  {
    "day": 330,
    "month": 11,
    "date": 26,
    "sourceReference": "Gálatas 1 / Jeremías 47-48 / Salmos 142",
    "readings": [
      {
        "reference": "Gálatas 1",
        "book": 48,
        "chapter": 1,
        "endChapter": 1
      },
      {
        "reference": "Jeremías 47–48",
        "book": 24,
        "chapter": 47,
        "endChapter": 48
      },
      {
        "reference": "Salmos 142",
        "book": 19,
        "chapter": 142,
        "endChapter": 142
      }
    ],
    "passage": "Gálatas 1 · Jeremías 47–48 · Salmos 142",
    "theme": "26 de noviembre"
  },
  {
    "day": 331,
    "month": 11,
    "date": 27,
    "sourceReference": "Gálatas 2 / Jeremías 49-50 / Salmos 143",
    "readings": [
      {
        "reference": "Gálatas 2",
        "book": 48,
        "chapter": 2,
        "endChapter": 2
      },
      {
        "reference": "Jeremías 49–50",
        "book": 24,
        "chapter": 49,
        "endChapter": 50
      },
      {
        "reference": "Salmos 143",
        "book": 19,
        "chapter": 143,
        "endChapter": 143
      }
    ],
    "passage": "Gálatas 2 · Jeremías 49–50 · Salmos 143",
    "theme": "27 de noviembre"
  },
  {
    "day": 332,
    "month": 11,
    "date": 28,
    "sourceReference": "Gálatas 3.1-20 / Jeremías 51-52 / Salmos 144",
    "readings": [
      {
        "reference": "Gálatas 3:1–20",
        "book": 48,
        "chapter": 3,
        "endChapter": 3
      },
      {
        "reference": "Jeremías 51–52",
        "book": 24,
        "chapter": 51,
        "endChapter": 52
      },
      {
        "reference": "Salmos 144",
        "book": 19,
        "chapter": 144,
        "endChapter": 144
      }
    ],
    "passage": "Gálatas 3:1–20 · Jeremías 51–52 · Salmos 144",
    "theme": "28 de noviembre"
  },
  {
    "day": 333,
    "month": 11,
    "date": 29,
    "sourceReference": "Gálatas 3.21-4.20 / Lamentaciones 1-2 / Salmos 145",
    "readings": [
      {
        "reference": "Gálatas 3:21–4:20",
        "book": 48,
        "chapter": 3,
        "endChapter": 4
      },
      {
        "reference": "Lamentaciones 1–2",
        "book": 25,
        "chapter": 1,
        "endChapter": 2
      },
      {
        "reference": "Salmos 145",
        "book": 19,
        "chapter": 145,
        "endChapter": 145
      }
    ],
    "passage": "Gálatas 3:21–4:20 · Lamentaciones 1–2 · Salmos 145",
    "theme": "29 de noviembre"
  },
  {
    "day": 334,
    "month": 11,
    "date": 30,
    "sourceReference": "Gálatas 4.21-31 / Lamentaciones 3-4 / Salmos 146",
    "readings": [
      {
        "reference": "Gálatas 4:21–31",
        "book": 48,
        "chapter": 4,
        "endChapter": 4
      },
      {
        "reference": "Lamentaciones 3–4",
        "book": 25,
        "chapter": 3,
        "endChapter": 4
      },
      {
        "reference": "Salmos 146",
        "book": 19,
        "chapter": 146,
        "endChapter": 146
      }
    ],
    "passage": "Gálatas 4:21–31 · Lamentaciones 3–4 · Salmos 146",
    "theme": "30 de noviembre"
  },
  {
    "day": 335,
    "month": 12,
    "date": 1,
    "sourceReference": "Gálatas 5.1-15 / Lamentaciones 5 / Salmos 147",
    "readings": [
      {
        "reference": "Gálatas 5:1–15",
        "book": 48,
        "chapter": 5,
        "endChapter": 5
      },
      {
        "reference": "Lamentaciones 5",
        "book": 25,
        "chapter": 5,
        "endChapter": 5
      },
      {
        "reference": "Salmos 147",
        "book": 19,
        "chapter": 147,
        "endChapter": 147
      }
    ],
    "passage": "Gálatas 5:1–15 · Lamentaciones 5 · Salmos 147",
    "theme": "1 de diciembre"
  },
  {
    "day": 336,
    "month": 12,
    "date": 2,
    "sourceReference": "Gálatas 5.16-26 / Ezequiel 1 / Salmos 148",
    "readings": [
      {
        "reference": "Gálatas 5:16–26",
        "book": 48,
        "chapter": 5,
        "endChapter": 5
      },
      {
        "reference": "Ezequiel 1",
        "book": 26,
        "chapter": 1,
        "endChapter": 1
      },
      {
        "reference": "Salmos 148",
        "book": 19,
        "chapter": 148,
        "endChapter": 148
      }
    ],
    "passage": "Gálatas 5:16–26 · Ezequiel 1 · Salmos 148",
    "theme": "2 de diciembre"
  },
  {
    "day": 337,
    "month": 12,
    "date": 3,
    "sourceReference": "Gálatas 6 / Ezequiel 2-3 / Salmos 149",
    "readings": [
      {
        "reference": "Gálatas 6",
        "book": 48,
        "chapter": 6,
        "endChapter": 6
      },
      {
        "reference": "Ezequiel 2–3",
        "book": 26,
        "chapter": 2,
        "endChapter": 3
      },
      {
        "reference": "Salmos 149",
        "book": 19,
        "chapter": 149,
        "endChapter": 149
      }
    ],
    "passage": "Gálatas 6 · Ezequiel 2–3 · Salmos 149",
    "theme": "3 de diciembre"
  },
  {
    "day": 338,
    "month": 12,
    "date": 4,
    "sourceReference": "Efesios 1 / Ezequiel 4-5 / Salmos 150",
    "readings": [
      {
        "reference": "Efesios 1",
        "book": 49,
        "chapter": 1,
        "endChapter": 1
      },
      {
        "reference": "Ezequiel 4–5",
        "book": 26,
        "chapter": 4,
        "endChapter": 5
      },
      {
        "reference": "Salmos 150",
        "book": 19,
        "chapter": 150,
        "endChapter": 150
      }
    ],
    "passage": "Efesios 1 · Ezequiel 4–5 · Salmos 150",
    "theme": "4 de diciembre"
  },
  {
    "day": 339,
    "month": 12,
    "date": 5,
    "sourceReference": "Efesios 2 / Ezequiel 6-7 / Isaías 40",
    "readings": [
      {
        "reference": "Efesios 2",
        "book": 49,
        "chapter": 2,
        "endChapter": 2
      },
      {
        "reference": "Ezequiel 6–7",
        "book": 26,
        "chapter": 6,
        "endChapter": 7
      },
      {
        "reference": "Isaías 40",
        "book": 23,
        "chapter": 40,
        "endChapter": 40
      }
    ],
    "passage": "Efesios 2 · Ezequiel 6–7 · Isaías 40",
    "theme": "5 de diciembre"
  },
  {
    "day": 340,
    "month": 12,
    "date": 6,
    "sourceReference": "Efesios 3 / Ezequiel 8-9 / Isaías 41",
    "readings": [
      {
        "reference": "Efesios 3",
        "book": 49,
        "chapter": 3,
        "endChapter": 3
      },
      {
        "reference": "Ezequiel 8–9",
        "book": 26,
        "chapter": 8,
        "endChapter": 9
      },
      {
        "reference": "Isaías 41",
        "book": 23,
        "chapter": 41,
        "endChapter": 41
      }
    ],
    "passage": "Efesios 3 · Ezequiel 8–9 · Isaías 41",
    "theme": "6 de diciembre"
  },
  {
    "day": 341,
    "month": 12,
    "date": 7,
    "sourceReference": "Efesios 4.1-16 / Ezequiel 10-11 / Isaías 42",
    "readings": [
      {
        "reference": "Efesios 4:1–16",
        "book": 49,
        "chapter": 4,
        "endChapter": 4
      },
      {
        "reference": "Ezequiel 10–11",
        "book": 26,
        "chapter": 10,
        "endChapter": 11
      },
      {
        "reference": "Isaías 42",
        "book": 23,
        "chapter": 42,
        "endChapter": 42
      }
    ],
    "passage": "Efesios 4:1–16 · Ezequiel 10–11 · Isaías 42",
    "theme": "7 de diciembre"
  },
  {
    "day": 342,
    "month": 12,
    "date": 8,
    "sourceReference": "Efesios 4.17-32 / Ezequiel 12-13 / Isaías 43",
    "readings": [
      {
        "reference": "Efesios 4:17–32",
        "book": 49,
        "chapter": 4,
        "endChapter": 4
      },
      {
        "reference": "Ezequiel 12–13",
        "book": 26,
        "chapter": 12,
        "endChapter": 13
      },
      {
        "reference": "Isaías 43",
        "book": 23,
        "chapter": 43,
        "endChapter": 43
      }
    ],
    "passage": "Efesios 4:17–32 · Ezequiel 12–13 · Isaías 43",
    "theme": "8 de diciembre"
  },
  {
    "day": 343,
    "month": 12,
    "date": 9,
    "sourceReference": "Efesios 5.1-20 / Ezequiel 14-15 / Isaías 44",
    "readings": [
      {
        "reference": "Efesios 5:1–20",
        "book": 49,
        "chapter": 5,
        "endChapter": 5
      },
      {
        "reference": "Ezequiel 14–15",
        "book": 26,
        "chapter": 14,
        "endChapter": 15
      },
      {
        "reference": "Isaías 44",
        "book": 23,
        "chapter": 44,
        "endChapter": 44
      }
    ],
    "passage": "Efesios 5:1–20 · Ezequiel 14–15 · Isaías 44",
    "theme": "9 de diciembre"
  },
  {
    "day": 344,
    "month": 12,
    "date": 10,
    "sourceReference": "Efesios 5.21-33 / Ezequiel 16 / Isaías 45",
    "readings": [
      {
        "reference": "Efesios 5:21–33",
        "book": 49,
        "chapter": 5,
        "endChapter": 5
      },
      {
        "reference": "Ezequiel 16",
        "book": 26,
        "chapter": 16,
        "endChapter": 16
      },
      {
        "reference": "Isaías 45",
        "book": 23,
        "chapter": 45,
        "endChapter": 45
      }
    ],
    "passage": "Efesios 5:21–33 · Ezequiel 16 · Isaías 45",
    "theme": "10 de diciembre"
  },
  {
    "day": 345,
    "month": 12,
    "date": 11,
    "sourceReference": "Efesios 6 / Ezequiel 17 / Isaías 46",
    "readings": [
      {
        "reference": "Efesios 6",
        "book": 49,
        "chapter": 6,
        "endChapter": 6
      },
      {
        "reference": "Ezequiel 17",
        "book": 26,
        "chapter": 17,
        "endChapter": 17
      },
      {
        "reference": "Isaías 46",
        "book": 23,
        "chapter": 46,
        "endChapter": 46
      }
    ],
    "passage": "Efesios 6 · Ezequiel 17 · Isaías 46",
    "theme": "11 de diciembre"
  },
  {
    "day": 346,
    "month": 12,
    "date": 12,
    "sourceReference": "Filipenses 1.1-11 / Ezequiel 18 / Isaías 47",
    "readings": [
      {
        "reference": "Filipenses 1:1–11",
        "book": 50,
        "chapter": 1,
        "endChapter": 1
      },
      {
        "reference": "Ezequiel 18",
        "book": 26,
        "chapter": 18,
        "endChapter": 18
      },
      {
        "reference": "Isaías 47",
        "book": 23,
        "chapter": 47,
        "endChapter": 47
      }
    ],
    "passage": "Filipenses 1:1–11 · Ezequiel 18 · Isaías 47",
    "theme": "12 de diciembre"
  },
  {
    "day": 347,
    "month": 12,
    "date": 13,
    "sourceReference": "Filipenses 1.12-30 / Ezequiel 19 / Isaías 48",
    "readings": [
      {
        "reference": "Filipenses 1:12–30",
        "book": 50,
        "chapter": 1,
        "endChapter": 1
      },
      {
        "reference": "Ezequiel 19",
        "book": 26,
        "chapter": 19,
        "endChapter": 19
      },
      {
        "reference": "Isaías 48",
        "book": 23,
        "chapter": 48,
        "endChapter": 48
      }
    ],
    "passage": "Filipenses 1:12–30 · Ezequiel 19 · Isaías 48",
    "theme": "13 de diciembre"
  },
  {
    "day": 348,
    "month": 12,
    "date": 14,
    "sourceReference": "Filipenses 2.1-11 / Ezequiel 20 / Isaías 49",
    "readings": [
      {
        "reference": "Filipenses 2:1–11",
        "book": 50,
        "chapter": 2,
        "endChapter": 2
      },
      {
        "reference": "Ezequiel 20",
        "book": 26,
        "chapter": 20,
        "endChapter": 20
      },
      {
        "reference": "Isaías 49",
        "book": 23,
        "chapter": 49,
        "endChapter": 49
      }
    ],
    "passage": "Filipenses 2:1–11 · Ezequiel 20 · Isaías 49",
    "theme": "14 de diciembre"
  },
  {
    "day": 349,
    "month": 12,
    "date": 15,
    "sourceReference": "Filipenses 2.12-30 / Ezequiel 21-22 / Isaías 50",
    "readings": [
      {
        "reference": "Filipenses 2:12–30",
        "book": 50,
        "chapter": 2,
        "endChapter": 2
      },
      {
        "reference": "Ezequiel 21–22",
        "book": 26,
        "chapter": 21,
        "endChapter": 22
      },
      {
        "reference": "Isaías 50",
        "book": 23,
        "chapter": 50,
        "endChapter": 50
      }
    ],
    "passage": "Filipenses 2:12–30 · Ezequiel 21–22 · Isaías 50",
    "theme": "15 de diciembre"
  },
  {
    "day": 350,
    "month": 12,
    "date": 16,
    "sourceReference": "Filipenses 3 / Ezequiel 23 / Isaías 51",
    "readings": [
      {
        "reference": "Filipenses 3",
        "book": 50,
        "chapter": 3,
        "endChapter": 3
      },
      {
        "reference": "Ezequiel 23",
        "book": 26,
        "chapter": 23,
        "endChapter": 23
      },
      {
        "reference": "Isaías 51",
        "book": 23,
        "chapter": 51,
        "endChapter": 51
      }
    ],
    "passage": "Filipenses 3 · Ezequiel 23 · Isaías 51",
    "theme": "16 de diciembre"
  },
  {
    "day": 351,
    "month": 12,
    "date": 17,
    "sourceReference": "Filipenses 4 / Ezequiel 24 / Isaías 52",
    "readings": [
      {
        "reference": "Filipenses 4",
        "book": 50,
        "chapter": 4,
        "endChapter": 4
      },
      {
        "reference": "Ezequiel 24",
        "book": 26,
        "chapter": 24,
        "endChapter": 24
      },
      {
        "reference": "Isaías 52",
        "book": 23,
        "chapter": 52,
        "endChapter": 52
      }
    ],
    "passage": "Filipenses 4 · Ezequiel 24 · Isaías 52",
    "theme": "17 de diciembre"
  },
  {
    "day": 352,
    "month": 12,
    "date": 18,
    "sourceReference": "Colosenses 1.1-23 / Ezequiel 25-26 / Isaías 53",
    "readings": [
      {
        "reference": "Colosenses 1:1–23",
        "book": 51,
        "chapter": 1,
        "endChapter": 1
      },
      {
        "reference": "Ezequiel 25–26",
        "book": 26,
        "chapter": 25,
        "endChapter": 26
      },
      {
        "reference": "Isaías 53",
        "book": 23,
        "chapter": 53,
        "endChapter": 53
      }
    ],
    "passage": "Colosenses 1:1–23 · Ezequiel 25–26 · Isaías 53",
    "theme": "18 de diciembre"
  },
  {
    "day": 353,
    "month": 12,
    "date": 19,
    "sourceReference": "Colosenses 1.24-2.19 / Ezequiel 27-28 / Isaías 54",
    "readings": [
      {
        "reference": "Colosenses 1:24–2:19",
        "book": 51,
        "chapter": 1,
        "endChapter": 2
      },
      {
        "reference": "Ezequiel 27–28",
        "book": 26,
        "chapter": 27,
        "endChapter": 28
      },
      {
        "reference": "Isaías 54",
        "book": 23,
        "chapter": 54,
        "endChapter": 54
      }
    ],
    "passage": "Colosenses 1:24–2:19 · Ezequiel 27–28 · Isaías 54",
    "theme": "19 de diciembre"
  },
  {
    "day": 354,
    "month": 12,
    "date": 20,
    "sourceReference": "Colosenses 2.20-3.17 / Ezequiel 29-30 / Isaías 55",
    "readings": [
      {
        "reference": "Colosenses 2:20–3:17",
        "book": 51,
        "chapter": 2,
        "endChapter": 3
      },
      {
        "reference": "Ezequiel 29–30",
        "book": 26,
        "chapter": 29,
        "endChapter": 30
      },
      {
        "reference": "Isaías 55",
        "book": 23,
        "chapter": 55,
        "endChapter": 55
      }
    ],
    "passage": "Colosenses 2:20–3:17 · Ezequiel 29–30 · Isaías 55",
    "theme": "20 de diciembre"
  },
  {
    "day": 355,
    "month": 12,
    "date": 21,
    "sourceReference": "Colosenses 3.18-4.18 / Ezequiel 31-32 / Isaías 56",
    "readings": [
      {
        "reference": "Colosenses 3:18–4:18",
        "book": 51,
        "chapter": 3,
        "endChapter": 4
      },
      {
        "reference": "Ezequiel 31–32",
        "book": 26,
        "chapter": 31,
        "endChapter": 32
      },
      {
        "reference": "Isaías 56",
        "book": 23,
        "chapter": 56,
        "endChapter": 56
      }
    ],
    "passage": "Colosenses 3:18–4:18 · Ezequiel 31–32 · Isaías 56",
    "theme": "21 de diciembre"
  },
  {
    "day": 356,
    "month": 12,
    "date": 22,
    "sourceReference": "Lucas 1.1-25 / Ezequiel 33 / Isaías 57",
    "readings": [
      {
        "reference": "Lucas 1:1–25",
        "book": 42,
        "chapter": 1,
        "endChapter": 1
      },
      {
        "reference": "Ezequiel 33",
        "book": 26,
        "chapter": 33,
        "endChapter": 33
      },
      {
        "reference": "Isaías 57",
        "book": 23,
        "chapter": 57,
        "endChapter": 57
      }
    ],
    "passage": "Lucas 1:1–25 · Ezequiel 33 · Isaías 57",
    "theme": "22 de diciembre"
  },
  {
    "day": 357,
    "month": 12,
    "date": 23,
    "sourceReference": "Lucas 1.26-56 / Ezequiel 34 / Isaías 58",
    "readings": [
      {
        "reference": "Lucas 1:26–56",
        "book": 42,
        "chapter": 1,
        "endChapter": 1
      },
      {
        "reference": "Ezequiel 34",
        "book": 26,
        "chapter": 34,
        "endChapter": 34
      },
      {
        "reference": "Isaías 58",
        "book": 23,
        "chapter": 58,
        "endChapter": 58
      }
    ],
    "passage": "Lucas 1:26–56 · Ezequiel 34 · Isaías 58",
    "theme": "23 de diciembre"
  },
  {
    "day": 358,
    "month": 12,
    "date": 24,
    "sourceReference": "Lucas 1.57-80 / Ezequiel 35-36 / Isaías 59",
    "readings": [
      {
        "reference": "Lucas 1:57–80",
        "book": 42,
        "chapter": 1,
        "endChapter": 1
      },
      {
        "reference": "Ezequiel 35–36",
        "book": 26,
        "chapter": 35,
        "endChapter": 36
      },
      {
        "reference": "Isaías 59",
        "book": 23,
        "chapter": 59,
        "endChapter": 59
      }
    ],
    "passage": "Lucas 1:57–80 · Ezequiel 35–36 · Isaías 59",
    "theme": "24 de diciembre"
  },
  {
    "day": 359,
    "month": 12,
    "date": 25,
    "sourceReference": "Lucas 2.1-20 / Ezequiel 37 / Isaías 60",
    "readings": [
      {
        "reference": "Lucas 2:1–20",
        "book": 42,
        "chapter": 2,
        "endChapter": 2
      },
      {
        "reference": "Ezequiel 37",
        "book": 26,
        "chapter": 37,
        "endChapter": 37
      },
      {
        "reference": "Isaías 60",
        "book": 23,
        "chapter": 60,
        "endChapter": 60
      }
    ],
    "passage": "Lucas 2:1–20 · Ezequiel 37 · Isaías 60",
    "theme": "25 de diciembre"
  },
  {
    "day": 360,
    "month": 12,
    "date": 26,
    "sourceReference": "Lucas 2.21-52 / Ezequiel 38-39 / Isaías 61",
    "readings": [
      {
        "reference": "Lucas 2:21–52",
        "book": 42,
        "chapter": 2,
        "endChapter": 2
      },
      {
        "reference": "Ezequiel 38–39",
        "book": 26,
        "chapter": 38,
        "endChapter": 39
      },
      {
        "reference": "Isaías 61",
        "book": 23,
        "chapter": 61,
        "endChapter": 61
      }
    ],
    "passage": "Lucas 2:21–52 · Ezequiel 38–39 · Isaías 61",
    "theme": "26 de diciembre"
  },
  {
    "day": 361,
    "month": 12,
    "date": 27,
    "sourceReference": "Lucas 3.1-20 / Ezequiel 40-41 / Isaías 62",
    "readings": [
      {
        "reference": "Lucas 3:1–20",
        "book": 42,
        "chapter": 3,
        "endChapter": 3
      },
      {
        "reference": "Ezequiel 40–41",
        "book": 26,
        "chapter": 40,
        "endChapter": 41
      },
      {
        "reference": "Isaías 62",
        "book": 23,
        "chapter": 62,
        "endChapter": 62
      }
    ],
    "passage": "Lucas 3:1–20 · Ezequiel 40–41 · Isaías 62",
    "theme": "27 de diciembre"
  },
  {
    "day": 362,
    "month": 12,
    "date": 28,
    "sourceReference": "Lucas 3.21-38 / Ezequiel 42-43 / Isaías 63",
    "readings": [
      {
        "reference": "Lucas 3:21–38",
        "book": 42,
        "chapter": 3,
        "endChapter": 3
      },
      {
        "reference": "Ezequiel 42–43",
        "book": 26,
        "chapter": 42,
        "endChapter": 43
      },
      {
        "reference": "Isaías 63",
        "book": 23,
        "chapter": 63,
        "endChapter": 63
      }
    ],
    "passage": "Lucas 3:21–38 · Ezequiel 42–43 · Isaías 63",
    "theme": "28 de diciembre"
  },
  {
    "day": 363,
    "month": 12,
    "date": 29,
    "sourceReference": "Lucas 4.1-30 / Ezequiel 44-45 / Isaías 64",
    "readings": [
      {
        "reference": "Lucas 4:1–30",
        "book": 42,
        "chapter": 4,
        "endChapter": 4
      },
      {
        "reference": "Ezequiel 44–45",
        "book": 26,
        "chapter": 44,
        "endChapter": 45
      },
      {
        "reference": "Isaías 64",
        "book": 23,
        "chapter": 64,
        "endChapter": 64
      }
    ],
    "passage": "Lucas 4:1–30 · Ezequiel 44–45 · Isaías 64",
    "theme": "29 de diciembre"
  },
  {
    "day": 364,
    "month": 12,
    "date": 30,
    "sourceReference": "Lucas 4.31-44 / Ezequiel 46-47 / Isaías 65",
    "readings": [
      {
        "reference": "Lucas 4:31–44",
        "book": 42,
        "chapter": 4,
        "endChapter": 4
      },
      {
        "reference": "Ezequiel 46–47",
        "book": 26,
        "chapter": 46,
        "endChapter": 47
      },
      {
        "reference": "Isaías 65",
        "book": 23,
        "chapter": 65,
        "endChapter": 65
      }
    ],
    "passage": "Lucas 4:31–44 · Ezequiel 46–47 · Isaías 65",
    "theme": "30 de diciembre"
  },
  {
    "day": 365,
    "month": 12,
    "date": 31,
    "sourceReference": "Lucas 5.1-26 / Ezequiel 48 / Isaías 66",
    "readings": [
      {
        "reference": "Lucas 5:1–26",
        "book": 42,
        "chapter": 5,
        "endChapter": 5
      },
      {
        "reference": "Ezequiel 48",
        "book": 26,
        "chapter": 48,
        "endChapter": 48
      },
      {
        "reference": "Isaías 66",
        "book": 23,
        "chapter": 66,
        "endChapter": 66
      }
    ],
    "passage": "Lucas 5:1–26 · Ezequiel 48 · Isaías 66",
    "theme": "31 de diciembre"
  }
];
  window.PLAN_365 = Object.freeze(days.map(day => {
    day.readings = Object.freeze(day.readings.map(Object.freeze));
    return Object.freeze(day);
  }));
})();
