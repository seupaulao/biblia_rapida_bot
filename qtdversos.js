exports.get_qtd_versos = (livro, capitulo) => { 
    const vetor = [
    {
        "abbr": "Gen",
        "book": "Genesis",
        "chapters": [
            {
                "chapter": "1",
                "verses": "31"
            },
            {
                "chapter": "2",
                "verses": "25"
            },
            {
                "chapter": "3",
                "verses": "24"
            },
            {
                "chapter": "4",
                "verses": "26"
            },
            {
                "chapter": "5",
                "verses": "32"
            },
            {
                "chapter": "6",
                "verses": "22"
            },
            {
                "chapter": "7",
                "verses": "24"
            },
            {
                "chapter": "8",
                "verses": "22"
            },
            {
                "chapter": "9",
                "verses": "29"
            },
            {
                "chapter": "10",
                "verses": "32"
            },
            {
                "chapter": "11",
                "verses": "32"
            },
            {
                "chapter": "12",
                "verses": "20"
            },
            {
                "chapter": "13",
                "verses": "18"
            },
            {
                "chapter": "14",
                "verses": "24"
            },
            {
                "chapter": "15",
                "verses": "21"
            },
            {
                "chapter": "16",
                "verses": "16"
            },
            {
                "chapter": "17",
                "verses": "27"
            },
            {
                "chapter": "18",
                "verses": "33"
            },
            {
                "chapter": "19",
                "verses": "38"
            },
            {
                "chapter": "20",
                "verses": "18"
            },
            {
                "chapter": "21",
                "verses": "34"
            },
            {
                "chapter": "22",
                "verses": "24"
            },
            {
                "chapter": "23",
                "verses": "20"
            },
            {
                "chapter": "24",
                "verses": "67"
            },
            {
                "chapter": "25",
                "verses": "34"
            },
            {
                "chapter": "26",
                "verses": "35"
            },
            {
                "chapter": "27",
                "verses": "46"
            },
            {
                "chapter": "28",
                "verses": "22"
            },
            {
                "chapter": "29",
                "verses": "35"
            },
            {
                "chapter": "30",
                "verses": "43"
            },
            {
                "chapter": "31",
                "verses": "55"
            },
            {
                "chapter": "32",
                "verses": "32"
            },
            {
                "chapter": "33",
                "verses": "20"
            },
            {
                "chapter": "34",
                "verses": "31"
            },
            {
                "chapter": "35",
                "verses": "29"
            },
            {
                "chapter": "36",
                "verses": "43"
            },
            {
                "chapter": "37",
                "verses": "36"
            },
            {
                "chapter": "38",
                "verses": "30"
            },
            {
                "chapter": "39",
                "verses": "23"
            },
            {
                "chapter": "40",
                "verses": "23"
            },
            {
                "chapter": "41",
                "verses": "57"
            },
            {
                "chapter": "42",
                "verses": "38"
            },
            {
                "chapter": "43",
                "verses": "34"
            },
            {
                "chapter": "44",
                "verses": "34"
            },
            {
                "chapter": "45",
                "verses": "28"
            },
            {
                "chapter": "46",
                "verses": "34"
            },
            {
                "chapter": "47",
                "verses": "31"
            },
            {
                "chapter": "48",
                "verses": "22"
            },
            {
                "chapter": "49",
                "verses": "33"
            },
            {
                "chapter": "50",
                "verses": "26"
            }
        ]
    },
    {
        "abbr": "Exod",
        "book": "Exodus",
        "chapters": [
            {
                "chapter": "1",
                "verses": "22"
            },
            {
                "chapter": "2",
                "verses": "25"
            },
            {
                "chapter": "3",
                "verses": "22"
            },
            {
                "chapter": "4",
                "verses": "31"
            },
            {
                "chapter": "5",
                "verses": "23"
            },
            {
                "chapter": "6",
                "verses": "30"
            },
            {
                "chapter": "7",
                "verses": "25"
            },
            {
                "chapter": "8",
                "verses": "32"
            },
            {
                "chapter": "9",
                "verses": "35"
            },
            {
                "chapter": "10",
                "verses": "29"
            },
            {
                "chapter": "11",
                "verses": "10"
            },
            {
                "chapter": "12",
                "verses": "51"
            },
            {
                "chapter": "13",
                "verses": "22"
            },
            {
                "chapter": "14",
                "verses": "31"
            },
            {
                "chapter": "15",
                "verses": "27"
            },
            {
                "chapter": "16",
                "verses": "36"
            },
            {
                "chapter": "17",
                "verses": "16"
            },
            {
                "chapter": "18",
                "verses": "27"
            },
            {
                "chapter": "19",
                "verses": "25"
            },
            {
                "chapter": "20",
                "verses": "26"
            },
            {
                "chapter": "21",
                "verses": "36"
            },
            {
                "chapter": "22",
                "verses": "31"
            },
            {
                "chapter": "23",
                "verses": "33"
            },
            {
                "chapter": "24",
                "verses": "18"
            },
            {
                "chapter": "25",
                "verses": "40"
            },
            {
                "chapter": "26",
                "verses": "37"
            },
            {
                "chapter": "27",
                "verses": "21"
            },
            {
                "chapter": "28",
                "verses": "43"
            },
            {
                "chapter": "29",
                "verses": "46"
            },
            {
                "chapter": "30",
                "verses": "38"
            },
            {
                "chapter": "31",
                "verses": "18"
            },
            {
                "chapter": "32",
                "verses": "35"
            },
            {
                "chapter": "33",
                "verses": "23"
            },
            {
                "chapter": "34",
                "verses": "35"
            },
            {
                "chapter": "35",
                "verses": "35"
            },
            {
                "chapter": "36",
                "verses": "38"
            },
            {
                "chapter": "37",
                "verses": "29"
            },
            {
                "chapter": "38",
                "verses": "31"
            },
            {
                "chapter": "39",
                "verses": "43"
            },
            {
                "chapter": "40",
                "verses": "38"
            }
        ]
    },
    {
        "abbr": "Lev",
        "book": "Leviticus",
        "chapters": [
            {
                "chapter": "1",
                "verses": "17"
            },
            {
                "chapter": "2",
                "verses": "16"
            },
            {
                "chapter": "3",
                "verses": "17"
            },
            {
                "chapter": "4",
                "verses": "35"
            },
            {
                "chapter": "5",
                "verses": "19"
            },
            {
                "chapter": "6",
                "verses": "30"
            },
            {
                "chapter": "7",
                "verses": "38"
            },
            {
                "chapter": "8",
                "verses": "36"
            },
            {
                "chapter": "9",
                "verses": "24"
            },
            {
                "chapter": "10",
                "verses": "20"
            },
            {
                "chapter": "11",
                "verses": "47"
            },
            {
                "chapter": "12",
                "verses": "8"
            },
            {
                "chapter": "13",
                "verses": "59"
            },
            {
                "chapter": "14",
                "verses": "57"
            },
            {
                "chapter": "15",
                "verses": "33"
            },
            {
                "chapter": "16",
                "verses": "34"
            },
            {
                "chapter": "17",
                "verses": "16"
            },
            {
                "chapter": "18",
                "verses": "30"
            },
            {
                "chapter": "19",
                "verses": "37"
            },
            {
                "chapter": "20",
                "verses": "27"
            },
            {
                "chapter": "21",
                "verses": "24"
            },
            {
                "chapter": "22",
                "verses": "33"
            },
            {
                "chapter": "23",
                "verses": "44"
            },
            {
                "chapter": "24",
                "verses": "23"
            },
            {
                "chapter": "25",
                "verses": "55"
            },
            {
                "chapter": "26",
                "verses": "46"
            },
            {
                "chapter": "27",
                "verses": "34"
            }
        ]
    },
    {
        "abbr": "Num",
        "book": "Numbers",
        "chapters": [
            {
                "chapter": "1",
                "verses": "54"
            },
            {
                "chapter": "2",
                "verses": "34"
            },
            {
                "chapter": "3",
                "verses": "51"
            },
            {
                "chapter": "4",
                "verses": "49"
            },
            {
                "chapter": "5",
                "verses": "31"
            },
            {
                "chapter": "6",
                "verses": "27"
            },
            {
                "chapter": "7",
                "verses": "89"
            },
            {
                "chapter": "8",
                "verses": "26"
            },
            {
                "chapter": "9",
                "verses": "23"
            },
            {
                "chapter": "10",
                "verses": "36"
            },
            {
                "chapter": "11",
                "verses": "35"
            },
            {
                "chapter": "12",
                "verses": "16"
            },
            {
                "chapter": "13",
                "verses": "33"
            },
            {
                "chapter": "14",
                "verses": "45"
            },
            {
                "chapter": "15",
                "verses": "41"
            },
            {
                "chapter": "16",
                "verses": "50"
            },
            {
                "chapter": "17",
                "verses": "13"
            },
            {
                "chapter": "18",
                "verses": "32"
            },
            {
                "chapter": "19",
                "verses": "22"
            },
            {
                "chapter": "20",
                "verses": "29"
            },
            {
                "chapter": "21",
                "verses": "35"
            },
            {
                "chapter": "22",
                "verses": "41"
            },
            {
                "chapter": "23",
                "verses": "30"
            },
            {
                "chapter": "24",
                "verses": "25"
            },
            {
                "chapter": "25",
                "verses": "18"
            },
            {
                "chapter": "26",
                "verses": "65"
            },
            {
                "chapter": "27",
                "verses": "23"
            },
            {
                "chapter": "28",
                "verses": "31"
            },
            {
                "chapter": "29",
                "verses": "40"
            },
            {
                "chapter": "30",
                "verses": "16"
            },
            {
                "chapter": "31",
                "verses": "54"
            },
            {
                "chapter": "32",
                "verses": "42"
            },
            {
                "chapter": "33",
                "verses": "56"
            },
            {
                "chapter": "34",
                "verses": "29"
            },
            {
                "chapter": "35",
                "verses": "34"
            },
            {
                "chapter": "36",
                "verses": "13"
            }
        ]
    },
    {
        "abbr": "Deut",
        "book": "Deuteronomy",
        "chapters": [
            {
                "chapter": "1",
                "verses": "46"
            },
            {
                "chapter": "2",
                "verses": "37"
            },
            {
                "chapter": "3",
                "verses": "29"
            },
            {
                "chapter": "4",
                "verses": "49"
            },
            {
                "chapter": "5",
                "verses": "33"
            },
            {
                "chapter": "6",
                "verses": "25"
            },
            {
                "chapter": "7",
                "verses": "26"
            },
            {
                "chapter": "8",
                "verses": "20"
            },
            {
                "chapter": "9",
                "verses": "29"
            },
            {
                "chapter": "10",
                "verses": "22"
            },
            {
                "chapter": "11",
                "verses": "32"
            },
            {
                "chapter": "12",
                "verses": "32"
            },
            {
                "chapter": "13",
                "verses": "18"
            },
            {
                "chapter": "14",
                "verses": "29"
            },
            {
                "chapter": "15",
                "verses": "23"
            },
            {
                "chapter": "16",
                "verses": "22"
            },
            {
                "chapter": "17",
                "verses": "20"
            },
            {
                "chapter": "18",
                "verses": "22"
            },
            {
                "chapter": "19",
                "verses": "21"
            },
            {
                "chapter": "20",
                "verses": "20"
            },
            {
                "chapter": "21",
                "verses": "23"
            },
            {
                "chapter": "22",
                "verses": "30"
            },
            {
                "chapter": "23",
                "verses": "25"
            },
            {
                "chapter": "24",
                "verses": "22"
            },
            {
                "chapter": "25",
                "verses": "19"
            },
            {
                "chapter": "26",
                "verses": "19"
            },
            {
                "chapter": "27",
                "verses": "26"
            },
            {
                "chapter": "28",
                "verses": "68"
            },
            {
                "chapter": "29",
                "verses": "29"
            },
            {
                "chapter": "30",
                "verses": "20"
            },
            {
                "chapter": "31",
                "verses": "30"
            },
            {
                "chapter": "32",
                "verses": "52"
            },
            {
                "chapter": "33",
                "verses": "29"
            },
            {
                "chapter": "34",
                "verses": "12"
            }
        ]
    },
    {
        "abbr": "Josh",
        "book": "Joshua",
        "chapters": [
            {
                "chapter": "1",
                "verses": "18"
            },
            {
                "chapter": "2",
                "verses": "24"
            },
            {
                "chapter": "3",
                "verses": "17"
            },
            {
                "chapter": "4",
                "verses": "24"
            },
            {
                "chapter": "5",
                "verses": "15"
            },
            {
                "chapter": "6",
                "verses": "27"
            },
            {
                "chapter": "7",
                "verses": "26"
            },
            {
                "chapter": "8",
                "verses": "35"
            },
            {
                "chapter": "9",
                "verses": "27"
            },
            {
                "chapter": "10",
                "verses": "43"
            },
            {
                "chapter": "11",
                "verses": "23"
            },
            {
                "chapter": "12",
                "verses": "24"
            },
            {
                "chapter": "13",
                "verses": "33"
            },
            {
                "chapter": "14",
                "verses": "15"
            },
            {
                "chapter": "15",
                "verses": "63"
            },
            {
                "chapter": "16",
                "verses": "10"
            },
            {
                "chapter": "17",
                "verses": "18"
            },
            {
                "chapter": "18",
                "verses": "28"
            },
            {
                "chapter": "19",
                "verses": "51"
            },
            {
                "chapter": "20",
                "verses": "9"
            },
            {
                "chapter": "21",
                "verses": "45"
            },
            {
                "chapter": "22",
                "verses": "34"
            },
            {
                "chapter": "23",
                "verses": "16"
            },
            {
                "chapter": "24",
                "verses": "33"
            }
        ]
    },
    {
        "abbr": "Judg",
        "book": "Judges",
        "chapters": [
            {
                "chapter": "1",
                "verses": "36"
            },
            {
                "chapter": "2",
                "verses": "23"
            },
            {
                "chapter": "3",
                "verses": "31"
            },
            {
                "chapter": "4",
                "verses": "24"
            },
            {
                "chapter": "5",
                "verses": "31"
            },
            {
                "chapter": "6",
                "verses": "40"
            },
            {
                "chapter": "7",
                "verses": "25"
            },
            {
                "chapter": "8",
                "verses": "35"
            },
            {
                "chapter": "9",
                "verses": "57"
            },
            {
                "chapter": "10",
                "verses": "18"
            },
            {
                "chapter": "11",
                "verses": "40"
            },
            {
                "chapter": "12",
                "verses": "15"
            },
            {
                "chapter": "13",
                "verses": "25"
            },
            {
                "chapter": "14",
                "verses": "20"
            },
            {
                "chapter": "15",
                "verses": "20"
            },
            {
                "chapter": "16",
                "verses": "31"
            },
            {
                "chapter": "17",
                "verses": "13"
            },
            {
                "chapter": "18",
                "verses": "31"
            },
            {
                "chapter": "19",
                "verses": "30"
            },
            {
                "chapter": "20",
                "verses": "48"
            },
            {
                "chapter": "21",
                "verses": "25"
            }
        ]
    },
    {
        "abbr": "Ruth",
        "book": "Ruth",
        "chapters": [
            {
                "chapter": "1",
                "verses": "22"
            },
            {
                "chapter": "2",
                "verses": "23"
            },
            {
                "chapter": "3",
                "verses": "18"
            },
            {
                "chapter": "4",
                "verses": "22"
            }
        ]
    },
    {
        "abbr": "1Sam",
        "book": "1 Samuel",
        "chapters": [
            {
                "chapter": "1",
                "verses": "28"
            },
            {
                "chapter": "2",
                "verses": "36"
            },
            {
                "chapter": "3",
                "verses": "21"
            },
            {
                "chapter": "4",
                "verses": "22"
            },
            {
                "chapter": "5",
                "verses": "12"
            },
            {
                "chapter": "6",
                "verses": "21"
            },
            {
                "chapter": "7",
                "verses": "17"
            },
            {
                "chapter": "8",
                "verses": "22"
            },
            {
                "chapter": "9",
                "verses": "27"
            },
            {
                "chapter": "10",
                "verses": "27"
            },
            {
                "chapter": "11",
                "verses": "15"
            },
            {
                "chapter": "12",
                "verses": "25"
            },
            {
                "chapter": "13",
                "verses": "23"
            },
            {
                "chapter": "14",
                "verses": "52"
            },
            {
                "chapter": "15",
                "verses": "35"
            },
            {
                "chapter": "16",
                "verses": "23"
            },
            {
                "chapter": "17",
                "verses": "58"
            },
            {
                "chapter": "18",
                "verses": "30"
            },
            {
                "chapter": "19",
                "verses": "24"
            },
            {
                "chapter": "20",
                "verses": "42"
            },
            {
                "chapter": "21",
                "verses": "15"
            },
            {
                "chapter": "22",
                "verses": "23"
            },
            {
                "chapter": "23",
                "verses": "29"
            },
            {
                "chapter": "24",
                "verses": "22"
            },
            {
                "chapter": "25",
                "verses": "44"
            },
            {
                "chapter": "26",
                "verses": "25"
            },
            {
                "chapter": "27",
                "verses": "12"
            },
            {
                "chapter": "28",
                "verses": "25"
            },
            {
                "chapter": "29",
                "verses": "11"
            },
            {
                "chapter": "30",
                "verses": "31"
            },
            {
                "chapter": "31",
                "verses": "13"
            }
        ]
    },
    {
        "abbr": "2Sam",
        "book": "2 Samuel",
        "chapters": [
            {
                "chapter": "1",
                "verses": "27"
            },
            {
                "chapter": "2",
                "verses": "32"
            },
            {
                "chapter": "3",
                "verses": "39"
            },
            {
                "chapter": "4",
                "verses": "12"
            },
            {
                "chapter": "5",
                "verses": "25"
            },
            {
                "chapter": "6",
                "verses": "23"
            },
            {
                "chapter": "7",
                "verses": "29"
            },
            {
                "chapter": "8",
                "verses": "18"
            },
            {
                "chapter": "9",
                "verses": "13"
            },
            {
                "chapter": "10",
                "verses": "19"
            },
            {
                "chapter": "11",
                "verses": "27"
            },
            {
                "chapter": "12",
                "verses": "31"
            },
            {
                "chapter": "13",
                "verses": "39"
            },
            {
                "chapter": "14",
                "verses": "33"
            },
            {
                "chapter": "15",
                "verses": "37"
            },
            {
                "chapter": "16",
                "verses": "23"
            },
            {
                "chapter": "17",
                "verses": "29"
            },
            {
                "chapter": "18",
                "verses": "33"
            },
            {
                "chapter": "19",
                "verses": "43"
            },
            {
                "chapter": "20",
                "verses": "26"
            },
            {
                "chapter": "21",
                "verses": "22"
            },
            {
                "chapter": "22",
                "verses": "51"
            },
            {
                "chapter": "23",
                "verses": "39"
            },
            {
                "chapter": "24",
                "verses": "25"
            }
        ]
    },
    {
        "abbr": "1Kgs",
        "book": "1 Kings",
        "chapters": [
            {
                "chapter": "1",
                "verses": "53"
            },
            {
                "chapter": "2",
                "verses": "46"
            },
            {
                "chapter": "3",
                "verses": "28"
            },
            {
                "chapter": "4",
                "verses": "34"
            },
            {
                "chapter": "5",
                "verses": "18"
            },
            {
                "chapter": "6",
                "verses": "38"
            },
            {
                "chapter": "7",
                "verses": "51"
            },
            {
                "chapter": "8",
                "verses": "66"
            },
            {
                "chapter": "9",
                "verses": "28"
            },
            {
                "chapter": "10",
                "verses": "29"
            },
            {
                "chapter": "11",
                "verses": "43"
            },
            {
                "chapter": "12",
                "verses": "33"
            },
            {
                "chapter": "13",
                "verses": "34"
            },
            {
                "chapter": "14",
                "verses": "31"
            },
            {
                "chapter": "15",
                "verses": "34"
            },
            {
                "chapter": "16",
                "verses": "34"
            },
            {
                "chapter": "17",
                "verses": "24"
            },
            {
                "chapter": "18",
                "verses": "46"
            },
            {
                "chapter": "19",
                "verses": "21"
            },
            {
                "chapter": "20",
                "verses": "43"
            },
            {
                "chapter": "21",
                "verses": "29"
            },
            {
                "chapter": "22",
                "verses": "53"
            }
        ]
    },
    {
        "abbr": "2Kgs",
        "book": "2 Kings",
        "chapters": [
            {
                "chapter": "1",
                "verses": "18"
            },
            {
                "chapter": "2",
                "verses": "25"
            },
            {
                "chapter": "3",
                "verses": "27"
            },
            {
                "chapter": "4",
                "verses": "44"
            },
            {
                "chapter": "5",
                "verses": "27"
            },
            {
                "chapter": "6",
                "verses": "33"
            },
            {
                "chapter": "7",
                "verses": "20"
            },
            {
                "chapter": "8",
                "verses": "29"
            },
            {
                "chapter": "9",
                "verses": "37"
            },
            {
                "chapter": "10",
                "verses": "36"
            },
            {
                "chapter": "11",
                "verses": "21"
            },
            {
                "chapter": "12",
                "verses": "21"
            },
            {
                "chapter": "13",
                "verses": "25"
            },
            {
                "chapter": "14",
                "verses": "29"
            },
            {
                "chapter": "15",
                "verses": "38"
            },
            {
                "chapter": "16",
                "verses": "20"
            },
            {
                "chapter": "17",
                "verses": "41"
            },
            {
                "chapter": "18",
                "verses": "37"
            },
            {
                "chapter": "19",
                "verses": "37"
            },
            {
                "chapter": "20",
                "verses": "21"
            },
            {
                "chapter": "21",
                "verses": "26"
            },
            {
                "chapter": "22",
                "verses": "20"
            },
            {
                "chapter": "23",
                "verses": "37"
            },
            {
                "chapter": "24",
                "verses": "20"
            },
            {
                "chapter": "25",
                "verses": "30"
            }
        ]
    },
    {
        "abbr": "1Chr",
        "book": "1 Chronicles",
        "chapters": [
            {
                "chapter": "1",
                "verses": "54"
            },
            {
                "chapter": "2",
                "verses": "55"
            },
            {
                "chapter": "3",
                "verses": "24"
            },
            {
                "chapter": "4",
                "verses": "43"
            },
            {
                "chapter": "5",
                "verses": "26"
            },
            {
                "chapter": "6",
                "verses": "81"
            },
            {
                "chapter": "7",
                "verses": "40"
            },
            {
                "chapter": "8",
                "verses": "40"
            },
            {
                "chapter": "9",
                "verses": "44"
            },
            {
                "chapter": "10",
                "verses": "14"
            },
            {
                "chapter": "11",
                "verses": "47"
            },
            {
                "chapter": "12",
                "verses": "40"
            },
            {
                "chapter": "13",
                "verses": "14"
            },
            {
                "chapter": "14",
                "verses": "17"
            },
            {
                "chapter": "15",
                "verses": "29"
            },
            {
                "chapter": "16",
                "verses": "43"
            },
            {
                "chapter": "17",
                "verses": "27"
            },
            {
                "chapter": "18",
                "verses": "17"
            },
            {
                "chapter": "19",
                "verses": "19"
            },
            {
                "chapter": "20",
                "verses": "8"
            },
            {
                "chapter": "21",
                "verses": "30"
            },
            {
                "chapter": "22",
                "verses": "19"
            },
            {
                "chapter": "23",
                "verses": "32"
            },
            {
                "chapter": "24",
                "verses": "31"
            },
            {
                "chapter": "25",
                "verses": "31"
            },
            {
                "chapter": "26",
                "verses": "32"
            },
            {
                "chapter": "27",
                "verses": "34"
            },
            {
                "chapter": "28",
                "verses": "21"
            },
            {
                "chapter": "29",
                "verses": "30"
            }
        ]
    },
    {
        "abbr": "2Chr",
        "book": "2 Chronicles",
        "chapters": [
            {
                "chapter": "1",
                "verses": "17"
            },
            {
                "chapter": "2",
                "verses": "18"
            },
            {
                "chapter": "3",
                "verses": "17"
            },
            {
                "chapter": "4",
                "verses": "22"
            },
            {
                "chapter": "5",
                "verses": "14"
            },
            {
                "chapter": "6",
                "verses": "42"
            },
            {
                "chapter": "7",
                "verses": "22"
            },
            {
                "chapter": "8",
                "verses": "18"
            },
            {
                "chapter": "9",
                "verses": "31"
            },
            {
                "chapter": "10",
                "verses": "19"
            },
            {
                "chapter": "11",
                "verses": "23"
            },
            {
                "chapter": "12",
                "verses": "16"
            },
            {
                "chapter": "13",
                "verses": "22"
            },
            {
                "chapter": "14",
                "verses": "15"
            },
            {
                "chapter": "15",
                "verses": "19"
            },
            {
                "chapter": "16",
                "verses": "14"
            },
            {
                "chapter": "17",
                "verses": "19"
            },
            {
                "chapter": "18",
                "verses": "34"
            },
            {
                "chapter": "19",
                "verses": "11"
            },
            {
                "chapter": "20",
                "verses": "37"
            },
            {
                "chapter": "21",
                "verses": "20"
            },
            {
                "chapter": "22",
                "verses": "12"
            },
            {
                "chapter": "23",
                "verses": "21"
            },
            {
                "chapter": "24",
                "verses": "27"
            },
            {
                "chapter": "25",
                "verses": "28"
            },
            {
                "chapter": "26",
                "verses": "23"
            },
            {
                "chapter": "27",
                "verses": "9"
            },
            {
                "chapter": "28",
                "verses": "27"
            },
            {
                "chapter": "29",
                "verses": "36"
            },
            {
                "chapter": "30",
                "verses": "27"
            },
            {
                "chapter": "31",
                "verses": "21"
            },
            {
                "chapter": "32",
                "verses": "33"
            },
            {
                "chapter": "33",
                "verses": "25"
            },
            {
                "chapter": "34",
                "verses": "33"
            },
            {
                "chapter": "35",
                "verses": "27"
            },
            {
                "chapter": "36",
                "verses": "23"
            }
        ]
    },
    {
        "abbr": "Ezra",
        "book": "Ezra",
        "chapters": [
            {
                "chapter": "1",
                "verses": "11"
            },
            {
                "chapter": "2",
                "verses": "70"
            },
            {
                "chapter": "3",
                "verses": "13"
            },
            {
                "chapter": "4",
                "verses": "24"
            },
            {
                "chapter": "5",
                "verses": "17"
            },
            {
                "chapter": "6",
                "verses": "22"
            },
            {
                "chapter": "7",
                "verses": "28"
            },
            {
                "chapter": "8",
                "verses": "36"
            },
            {
                "chapter": "9",
                "verses": "15"
            },
            {
                "chapter": "10",
                "verses": "44"
            }
        ]
    },
    {
        "abbr": "Neh",
        "book": "Nehemiah",
        "chapters": [
            {
                "chapter": "1",
                "verses": "11"
            },
            {
                "chapter": "2",
                "verses": "20"
            },
            {
                "chapter": "3",
                "verses": "32"
            },
            {
                "chapter": "4",
                "verses": "23"
            },
            {
                "chapter": "5",
                "verses": "19"
            },
            {
                "chapter": "6",
                "verses": "19"
            },
            {
                "chapter": "7",
                "verses": "73"
            },
            {
                "chapter": "8",
                "verses": "18"
            },
            {
                "chapter": "9",
                "verses": "38"
            },
            {
                "chapter": "10",
                "verses": "39"
            },
            {
                "chapter": "11",
                "verses": "36"
            },
            {
                "chapter": "12",
                "verses": "47"
            },
            {
                "chapter": "13",
                "verses": "31"
            }
        ]
    },
    {
        "abbr": "Esth",
        "book": "Esther",
        "chapters": [
            {
                "chapter": "1",
                "verses": "22"
            },
            {
                "chapter": "2",
                "verses": "23"
            },
            {
                "chapter": "3",
                "verses": "15"
            },
            {
                "chapter": "4",
                "verses": "17"
            },
            {
                "chapter": "5",
                "verses": "14"
            },
            {
                "chapter": "6",
                "verses": "14"
            },
            {
                "chapter": "7",
                "verses": "10"
            },
            {
                "chapter": "8",
                "verses": "17"
            },
            {
                "chapter": "9",
                "verses": "32"
            },
            {
                "chapter": "10",
                "verses": "3"
            }
        ]
    },
    {
        "abbr": "Job",
        "book": "Job",
        "chapters": [
            {
                "chapter": "1",
                "verses": "22"
            },
            {
                "chapter": "2",
                "verses": "13"
            },
            {
                "chapter": "3",
                "verses": "26"
            },
            {
                "chapter": "4",
                "verses": "21"
            },
            {
                "chapter": "5",
                "verses": "27"
            },
            {
                "chapter": "6",
                "verses": "30"
            },
            {
                "chapter": "7",
                "verses": "21"
            },
            {
                "chapter": "8",
                "verses": "22"
            },
            {
                "chapter": "9",
                "verses": "35"
            },
            {
                "chapter": "10",
                "verses": "22"
            },
            {
                "chapter": "11",
                "verses": "20"
            },
            {
                "chapter": "12",
                "verses": "25"
            },
            {
                "chapter": "13",
                "verses": "28"
            },
            {
                "chapter": "14",
                "verses": "22"
            },
            {
                "chapter": "15",
                "verses": "35"
            },
            {
                "chapter": "16",
                "verses": "22"
            },
            {
                "chapter": "17",
                "verses": "16"
            },
            {
                "chapter": "18",
                "verses": "21"
            },
            {
                "chapter": "19",
                "verses": "29"
            },
            {
                "chapter": "20",
                "verses": "29"
            },
            {
                "chapter": "21",
                "verses": "34"
            },
            {
                "chapter": "22",
                "verses": "30"
            },
            {
                "chapter": "23",
                "verses": "17"
            },
            {
                "chapter": "24",
                "verses": "25"
            },
            {
                "chapter": "25",
                "verses": "6"
            },
            {
                "chapter": "26",
                "verses": "14"
            },
            {
                "chapter": "27",
                "verses": "23"
            },
            {
                "chapter": "28",
                "verses": "28"
            },
            {
                "chapter": "29",
                "verses": "25"
            },
            {
                "chapter": "30",
                "verses": "31"
            },
            {
                "chapter": "31",
                "verses": "40"
            },
            {
                "chapter": "32",
                "verses": "22"
            },
            {
                "chapter": "33",
                "verses": "33"
            },
            {
                "chapter": "34",
                "verses": "37"
            },
            {
                "chapter": "35",
                "verses": "16"
            },
            {
                "chapter": "36",
                "verses": "33"
            },
            {
                "chapter": "37",
                "verses": "24"
            },
            {
                "chapter": "38",
                "verses": "41"
            },
            {
                "chapter": "39",
                "verses": "30"
            },
            {
                "chapter": "40",
                "verses": "24"
            },
            {
                "chapter": "41",
                "verses": "34"
            },
            {
                "chapter": "42",
                "verses": "17"
            }
        ]
    },
    {
        "abbr": "Ps",
        "book": "Psalm",
        "chapters": [
            {
                "chapter": "1",
                "verses": "6"
            },
            {
                "chapter": "2",
                "verses": "12"
            },
            {
                "chapter": "3",
                "verses": "8"
            },
            {
                "chapter": "4",
                "verses": "8"
            },
            {
                "chapter": "5",
                "verses": "12"
            },
            {
                "chapter": "6",
                "verses": "10"
            },
            {
                "chapter": "7",
                "verses": "17"
            },
            {
                "chapter": "8",
                "verses": "9"
            },
            {
                "chapter": "9",
                "verses": "20"
            },
            {
                "chapter": "10",
                "verses": "18"
            },
            {
                "chapter": "11",
                "verses": "7"
            },
            {
                "chapter": "12",
                "verses": "8"
            },
            {
                "chapter": "13",
                "verses": "6"
            },
            {
                "chapter": "14",
                "verses": "7"
            },
            {
                "chapter": "15",
                "verses": "5"
            },
            {
                "chapter": "16",
                "verses": "11"
            },
            {
                "chapter": "17",
                "verses": "15"
            },
            {
                "chapter": "18",
                "verses": "50"
            },
            {
                "chapter": "19",
                "verses": "14"
            },
            {
                "chapter": "20",
                "verses": "9"
            },
            {
                "chapter": "21",
                "verses": "13"
            },
            {
                "chapter": "22",
                "verses": "31"
            },
            {
                "chapter": "23",
                "verses": "6"
            },
            {
                "chapter": "24",
                "verses": "10"
            },
            {
                "chapter": "25",
                "verses": "22"
            },
            {
                "chapter": "26",
                "verses": "12"
            },
            {
                "chapter": "27",
                "verses": "14"
            },
            {
                "chapter": "28",
                "verses": "9"
            },
            {
                "chapter": "29",
                "verses": "11"
            },
            {
                "chapter": "30",
                "verses": "12"
            },
            {
                "chapter": "31",
                "verses": "24"
            },
            {
                "chapter": "32",
                "verses": "11"
            },
            {
                "chapter": "33",
                "verses": "22"
            },
            {
                "chapter": "34",
                "verses": "22"
            },
            {
                "chapter": "35",
                "verses": "28"
            },
            {
                "chapter": "36",
                "verses": "12"
            },
            {
                "chapter": "37",
                "verses": "40"
            },
            {
                "chapter": "38",
                "verses": "22"
            },
            {
                "chapter": "39",
                "verses": "13"
            },
            {
                "chapter": "40",
                "verses": "17"
            },
            {
                "chapter": "41",
                "verses": "13"
            },
            {
                "chapter": "42",
                "verses": "11"
            },
            {
                "chapter": "43",
                "verses": "5"
            },
            {
                "chapter": "44",
                "verses": "26"
            },
            {
                "chapter": "45",
                "verses": "17"
            },
            {
                "chapter": "46",
                "verses": "11"
            },
            {
                "chapter": "47",
                "verses": "9"
            },
            {
                "chapter": "48",
                "verses": "14"
            },
            {
                "chapter": "49",
                "verses": "20"
            },
            {
                "chapter": "50",
                "verses": "23"
            },
            {
                "chapter": "51",
                "verses": "19"
            },
            {
                "chapter": "52",
                "verses": "9"
            },
            {
                "chapter": "53",
                "verses": "6"
            },
            {
                "chapter": "54",
                "verses": "7"
            },
            {
                "chapter": "55",
                "verses": "23"
            },
            {
                "chapter": "56",
                "verses": "13"
            },
            {
                "chapter": "57",
                "verses": "11"
            },
            {
                "chapter": "58",
                "verses": "11"
            },
            {
                "chapter": "59",
                "verses": "17"
            },
            {
                "chapter": "60",
                "verses": "12"
            },
            {
                "chapter": "61",
                "verses": "8"
            },
            {
                "chapter": "62",
                "verses": "12"
            },
            {
                "chapter": "63",
                "verses": "11"
            },
            {
                "chapter": "64",
                "verses": "10"
            },
            {
                "chapter": "65",
                "verses": "13"
            },
            {
                "chapter": "66",
                "verses": "20"
            },
            {
                "chapter": "67",
                "verses": "7"
            },
            {
                "chapter": "68",
                "verses": "35"
            },
            {
                "chapter": "69",
                "verses": "36"
            },
            {
                "chapter": "70",
                "verses": "5"
            },
            {
                "chapter": "71",
                "verses": "24"
            },
            {
                "chapter": "72",
                "verses": "20"
            },
            {
                "chapter": "73",
                "verses": "28"
            },
            {
                "chapter": "74",
                "verses": "23"
            },
            {
                "chapter": "75",
                "verses": "10"
            },
            {
                "chapter": "76",
                "verses": "12"
            },
            {
                "chapter": "77",
                "verses": "20"
            },
            {
                "chapter": "78",
                "verses": "72"
            },
            {
                "chapter": "79",
                "verses": "13"
            },
            {
                "chapter": "80",
                "verses": "19"
            },
            {
                "chapter": "81",
                "verses": "16"
            },
            {
                "chapter": "82",
                "verses": "8"
            },
            {
                "chapter": "83",
                "verses": "18"
            },
            {
                "chapter": "84",
                "verses": "12"
            },
            {
                "chapter": "85",
                "verses": "13"
            },
            {
                "chapter": "86",
                "verses": "17"
            },
            {
                "chapter": "87",
                "verses": "7"
            },
            {
                "chapter": "88",
                "verses": "18"
            },
            {
                "chapter": "89",
                "verses": "52"
            },
            {
                "chapter": "90",
                "verses": "17"
            },
            {
                "chapter": "91",
                "verses": "16"
            },
            {
                "chapter": "92",
                "verses": "15"
            },
            {
                "chapter": "93",
                "verses": "5"
            },
            {
                "chapter": "94",
                "verses": "23"
            },
            {
                "chapter": "95",
                "verses": "11"
            },
            {
                "chapter": "96",
                "verses": "13"
            },
            {
                "chapter": "97",
                "verses": "12"
            },
            {
                "chapter": "98",
                "verses": "9"
            },
            {
                "chapter": "99",
                "verses": "9"
            },
            {
                "chapter": "100",
                "verses": "5"
            },
            {
                "chapter": "101",
                "verses": "8"
            },
            {
                "chapter": "102",
                "verses": "28"
            },
            {
                "chapter": "103",
                "verses": "22"
            },
            {
                "chapter": "104",
                "verses": "35"
            },
            {
                "chapter": "105",
                "verses": "45"
            },
            {
                "chapter": "106",
                "verses": "48"
            },
            {
                "chapter": "107",
                "verses": "43"
            },
            {
                "chapter": "108",
                "verses": "13"
            },
            {
                "chapter": "109",
                "verses": "31"
            },
            {
                "chapter": "110",
                "verses": "7"
            },
            {
                "chapter": "111",
                "verses": "10"
            },
            {
                "chapter": "112",
                "verses": "10"
            },
            {
                "chapter": "113",
                "verses": "9"
            },
            {
                "chapter": "114",
                "verses": "8"
            },
            {
                "chapter": "115",
                "verses": "18"
            },
            {
                "chapter": "116",
                "verses": "19"
            },
            {
                "chapter": "117",
                "verses": "2"
            },
            {
                "chapter": "118",
                "verses": "29"
            },
            {
                "chapter": "119",
                "verses": "176"
            },
            {
                "chapter": "120",
                "verses": "7"
            },
            {
                "chapter": "121",
                "verses": "8"
            },
            {
                "chapter": "122",
                "verses": "9"
            },
            {
                "chapter": "123",
                "verses": "4"
            },
            {
                "chapter": "124",
                "verses": "8"
            },
            {
                "chapter": "125",
                "verses": "5"
            },
            {
                "chapter": "126",
                "verses": "6"
            },
            {
                "chapter": "127",
                "verses": "5"
            },
            {
                "chapter": "128",
                "verses": "6"
            },
            {
                "chapter": "129",
                "verses": "8"
            },
            {
                "chapter": "130",
                "verses": "8"
            },
            {
                "chapter": "131",
                "verses": "3"
            },
            {
                "chapter": "132",
                "verses": "18"
            },
            {
                "chapter": "133",
                "verses": "3"
            },
            {
                "chapter": "134",
                "verses": "3"
            },
            {
                "chapter": "135",
                "verses": "21"
            },
            {
                "chapter": "136",
                "verses": "26"
            },
            {
                "chapter": "137",
                "verses": "9"
            },
            {
                "chapter": "138",
                "verses": "8"
            },
            {
                "chapter": "139",
                "verses": "24"
            },
            {
                "chapter": "140",
                "verses": "13"
            },
            {
                "chapter": "141",
                "verses": "10"
            },
            {
                "chapter": "142",
                "verses": "7"
            },
            {
                "chapter": "143",
                "verses": "12"
            },
            {
                "chapter": "144",
                "verses": "15"
            },
            {
                "chapter": "145",
                "verses": "21"
            },
            {
                "chapter": "146",
                "verses": "10"
            },
            {
                "chapter": "147",
                "verses": "20"
            },
            {
                "chapter": "148",
                "verses": "14"
            },
            {
                "chapter": "149",
                "verses": "9"
            },
            {
                "chapter": "150",
                "verses": "6"
            }
        ]
    },
    {
        "abbr": "Prov",
        "book": "Proverbs",
        "chapters": [
            {
                "chapter": "1",
                "verses": "33"
            },
            {
                "chapter": "2",
                "verses": "22"
            },
            {
                "chapter": "3",
                "verses": "35"
            },
            {
                "chapter": "4",
                "verses": "27"
            },
            {
                "chapter": "5",
                "verses": "23"
            },
            {
                "chapter": "6",
                "verses": "35"
            },
            {
                "chapter": "7",
                "verses": "27"
            },
            {
                "chapter": "8",
                "verses": "36"
            },
            {
                "chapter": "9",
                "verses": "18"
            },
            {
                "chapter": "10",
                "verses": "32"
            },
            {
                "chapter": "11",
                "verses": "31"
            },
            {
                "chapter": "12",
                "verses": "28"
            },
            {
                "chapter": "13",
                "verses": "25"
            },
            {
                "chapter": "14",
                "verses": "35"
            },
            {
                "chapter": "15",
                "verses": "33"
            },
            {
                "chapter": "16",
                "verses": "33"
            },
            {
                "chapter": "17",
                "verses": "28"
            },
            {
                "chapter": "18",
                "verses": "24"
            },
            {
                "chapter": "19",
                "verses": "29"
            },
            {
                "chapter": "20",
                "verses": "30"
            },
            {
                "chapter": "21",
                "verses": "31"
            },
            {
                "chapter": "22",
                "verses": "29"
            },
            {
                "chapter": "23",
                "verses": "35"
            },
            {
                "chapter": "24",
                "verses": "34"
            },
            {
                "chapter": "25",
                "verses": "28"
            },
            {
                "chapter": "26",
                "verses": "28"
            },
            {
                "chapter": "27",
                "verses": "27"
            },
            {
                "chapter": "28",
                "verses": "28"
            },
            {
                "chapter": "29",
                "verses": "27"
            },
            {
                "chapter": "30",
                "verses": "33"
            },
            {
                "chapter": "31",
                "verses": "31"
            }
        ]
    },
    {
        "abbr": "Eccl",
        "book": "Ecclesiastes",
        "chapters": [
            {
                "chapter": "1",
                "verses": "18"
            },
            {
                "chapter": "2",
                "verses": "26"
            },
            {
                "chapter": "3",
                "verses": "22"
            },
            {
                "chapter": "4",
                "verses": "16"
            },
            {
                "chapter": "5",
                "verses": "20"
            },
            {
                "chapter": "6",
                "verses": "12"
            },
            {
                "chapter": "7",
                "verses": "29"
            },
            {
                "chapter": "8",
                "verses": "17"
            },
            {
                "chapter": "9",
                "verses": "18"
            },
            {
                "chapter": "10",
                "verses": "20"
            },
            {
                "chapter": "11",
                "verses": "10"
            },
            {
                "chapter": "12",
                "verses": "14"
            }
        ]
    },
    {
        "abbr": "Song",
        "book": "Song of Solomon",
        "chapters": [
            {
                "chapter": "1",
                "verses": "17"
            },
            {
                "chapter": "2",
                "verses": "17"
            },
            {
                "chapter": "3",
                "verses": "11"
            },
            {
                "chapter": "4",
                "verses": "16"
            },
            {
                "chapter": "5",
                "verses": "16"
            },
            {
                "chapter": "6",
                "verses": "13"
            },
            {
                "chapter": "7",
                "verses": "13"
            },
            {
                "chapter": "8",
                "verses": "14"
            }
        ]
    },
    {
        "abbr": "Isa",
        "book": "Isaiah",
        "chapters": [
            {
                "chapter": "1",
                "verses": "31"
            },
            {
                "chapter": "2",
                "verses": "22"
            },
            {
                "chapter": "3",
                "verses": "26"
            },
            {
                "chapter": "4",
                "verses": "6"
            },
            {
                "chapter": "5",
                "verses": "30"
            },
            {
                "chapter": "6",
                "verses": "13"
            },
            {
                "chapter": "7",
                "verses": "25"
            },
            {
                "chapter": "8",
                "verses": "22"
            },
            {
                "chapter": "9",
                "verses": "21"
            },
            {
                "chapter": "10",
                "verses": "34"
            },
            {
                "chapter": "11",
                "verses": "16"
            },
            {
                "chapter": "12",
                "verses": "6"
            },
            {
                "chapter": "13",
                "verses": "22"
            },
            {
                "chapter": "14",
                "verses": "32"
            },
            {
                "chapter": "15",
                "verses": "9"
            },
            {
                "chapter": "16",
                "verses": "14"
            },
            {
                "chapter": "17",
                "verses": "14"
            },
            {
                "chapter": "18",
                "verses": "7"
            },
            {
                "chapter": "19",
                "verses": "25"
            },
            {
                "chapter": "20",
                "verses": "6"
            },
            {
                "chapter": "21",
                "verses": "17"
            },
            {
                "chapter": "22",
                "verses": "25"
            },
            {
                "chapter": "23",
                "verses": "18"
            },
            {
                "chapter": "24",
                "verses": "23"
            },
            {
                "chapter": "25",
                "verses": "12"
            },
            {
                "chapter": "26",
                "verses": "21"
            },
            {
                "chapter": "27",
                "verses": "13"
            },
            {
                "chapter": "28",
                "verses": "29"
            },
            {
                "chapter": "29",
                "verses": "24"
            },
            {
                "chapter": "30",
                "verses": "33"
            },
            {
                "chapter": "31",
                "verses": "9"
            },
            {
                "chapter": "32",
                "verses": "20"
            },
            {
                "chapter": "33",
                "verses": "24"
            },
            {
                "chapter": "34",
                "verses": "17"
            },
            {
                "chapter": "35",
                "verses": "10"
            },
            {
                "chapter": "36",
                "verses": "22"
            },
            {
                "chapter": "37",
                "verses": "38"
            },
            {
                "chapter": "38",
                "verses": "22"
            },
            {
                "chapter": "39",
                "verses": "8"
            },
            {
                "chapter": "40",
                "verses": "31"
            },
            {
                "chapter": "41",
                "verses": "29"
            },
            {
                "chapter": "42",
                "verses": "25"
            },
            {
                "chapter": "43",
                "verses": "28"
            },
            {
                "chapter": "44",
                "verses": "28"
            },
            {
                "chapter": "45",
                "verses": "25"
            },
            {
                "chapter": "46",
                "verses": "13"
            },
            {
                "chapter": "47",
                "verses": "15"
            },
            {
                "chapter": "48",
                "verses": "22"
            },
            {
                "chapter": "49",
                "verses": "26"
            },
            {
                "chapter": "50",
                "verses": "11"
            },
            {
                "chapter": "51",
                "verses": "23"
            },
            {
                "chapter": "52",
                "verses": "15"
            },
            {
                "chapter": "53",
                "verses": "12"
            },
            {
                "chapter": "54",
                "verses": "17"
            },
            {
                "chapter": "55",
                "verses": "13"
            },
            {
                "chapter": "56",
                "verses": "12"
            },
            {
                "chapter": "57",
                "verses": "21"
            },
            {
                "chapter": "58",
                "verses": "14"
            },
            {
                "chapter": "59",
                "verses": "21"
            },
            {
                "chapter": "60",
                "verses": "22"
            },
            {
                "chapter": "61",
                "verses": "11"
            },
            {
                "chapter": "62",
                "verses": "12"
            },
            {
                "chapter": "63",
                "verses": "19"
            },
            {
                "chapter": "64",
                "verses": "12"
            },
            {
                "chapter": "65",
                "verses": "25"
            },
            {
                "chapter": "66",
                "verses": "24"
            }
        ]
    },
    {
        "abbr": "Jer",
        "book": "Jeremiah",
        "chapters": [
            {
                "chapter": "1",
                "verses": "19"
            },
            {
                "chapter": "2",
                "verses": "37"
            },
            {
                "chapter": "3",
                "verses": "25"
            },
            {
                "chapter": "4",
                "verses": "31"
            },
            {
                "chapter": "5",
                "verses": "31"
            },
            {
                "chapter": "6",
                "verses": "30"
            },
            {
                "chapter": "7",
                "verses": "34"
            },
            {
                "chapter": "8",
                "verses": "22"
            },
            {
                "chapter": "9",
                "verses": "26"
            },
            {
                "chapter": "10",
                "verses": "25"
            },
            {
                "chapter": "11",
                "verses": "23"
            },
            {
                "chapter": "12",
                "verses": "17"
            },
            {
                "chapter": "13",
                "verses": "27"
            },
            {
                "chapter": "14",
                "verses": "22"
            },
            {
                "chapter": "15",
                "verses": "21"
            },
            {
                "chapter": "16",
                "verses": "21"
            },
            {
                "chapter": "17",
                "verses": "27"
            },
            {
                "chapter": "18",
                "verses": "23"
            },
            {
                "chapter": "19",
                "verses": "15"
            },
            {
                "chapter": "20",
                "verses": "18"
            },
            {
                "chapter": "21",
                "verses": "14"
            },
            {
                "chapter": "22",
                "verses": "30"
            },
            {
                "chapter": "23",
                "verses": "40"
            },
            {
                "chapter": "24",
                "verses": "10"
            },
            {
                "chapter": "25",
                "verses": "38"
            },
            {
                "chapter": "26",
                "verses": "24"
            },
            {
                "chapter": "27",
                "verses": "22"
            },
            {
                "chapter": "28",
                "verses": "17"
            },
            {
                "chapter": "29",
                "verses": "32"
            },
            {
                "chapter": "30",
                "verses": "24"
            },
            {
                "chapter": "31",
                "verses": "40"
            },
            {
                "chapter": "32",
                "verses": "44"
            },
            {
                "chapter": "33",
                "verses": "26"
            },
            {
                "chapter": "34",
                "verses": "22"
            },
            {
                "chapter": "35",
                "verses": "19"
            },
            {
                "chapter": "36",
                "verses": "32"
            },
            {
                "chapter": "37",
                "verses": "21"
            },
            {
                "chapter": "38",
                "verses": "28"
            },
            {
                "chapter": "39",
                "verses": "18"
            },
            {
                "chapter": "40",
                "verses": "16"
            },
            {
                "chapter": "41",
                "verses": "18"
            },
            {
                "chapter": "42",
                "verses": "22"
            },
            {
                "chapter": "43",
                "verses": "13"
            },
            {
                "chapter": "44",
                "verses": "30"
            },
            {
                "chapter": "45",
                "verses": "5"
            },
            {
                "chapter": "46",
                "verses": "28"
            },
            {
                "chapter": "47",
                "verses": "7"
            },
            {
                "chapter": "48",
                "verses": "47"
            },
            {
                "chapter": "49",
                "verses": "39"
            },
            {
                "chapter": "50",
                "verses": "46"
            },
            {
                "chapter": "51",
                "verses": "64"
            },
            {
                "chapter": "52",
                "verses": "34"
            }
        ]
    },
    {
        "abbr": "Lam",
        "book": "Lamentations",
        "chapters": [
            {
                "chapter": "1",
                "verses": "22"
            },
            {
                "chapter": "2",
                "verses": "22"
            },
            {
                "chapter": "3",
                "verses": "66"
            },
            {
                "chapter": "4",
                "verses": "22"
            },
            {
                "chapter": "5",
                "verses": "22"
            }
        ]
    },
    {
        "abbr": "Ezek",
        "book": "Ezekiel",
        "chapters": [
            {
                "chapter": "1",
                "verses": "28"
            },
            {
                "chapter": "2",
                "verses": "10"
            },
            {
                "chapter": "3",
                "verses": "27"
            },
            {
                "chapter": "4",
                "verses": "17"
            },
            {
                "chapter": "5",
                "verses": "17"
            },
            {
                "chapter": "6",
                "verses": "14"
            },
            {
                "chapter": "7",
                "verses": "27"
            },
            {
                "chapter": "8",
                "verses": "18"
            },
            {
                "chapter": "9",
                "verses": "11"
            },
            {
                "chapter": "10",
                "verses": "22"
            },
            {
                "chapter": "11",
                "verses": "25"
            },
            {
                "chapter": "12",
                "verses": "28"
            },
            {
                "chapter": "13",
                "verses": "23"
            },
            {
                "chapter": "14",
                "verses": "23"
            },
            {
                "chapter": "15",
                "verses": "8"
            },
            {
                "chapter": "16",
                "verses": "63"
            },
            {
                "chapter": "17",
                "verses": "24"
            },
            {
                "chapter": "18",
                "verses": "32"
            },
            {
                "chapter": "19",
                "verses": "14"
            },
            {
                "chapter": "20",
                "verses": "49"
            },
            {
                "chapter": "21",
                "verses": "32"
            },
            {
                "chapter": "22",
                "verses": "31"
            },
            {
                "chapter": "23",
                "verses": "49"
            },
            {
                "chapter": "24",
                "verses": "27"
            },
            {
                "chapter": "25",
                "verses": "17"
            },
            {
                "chapter": "26",
                "verses": "21"
            },
            {
                "chapter": "27",
                "verses": "36"
            },
            {
                "chapter": "28",
                "verses": "26"
            },
            {
                "chapter": "29",
                "verses": "21"
            },
            {
                "chapter": "30",
                "verses": "26"
            },
            {
                "chapter": "31",
                "verses": "18"
            },
            {
                "chapter": "32",
                "verses": "32"
            },
            {
                "chapter": "33",
                "verses": "33"
            },
            {
                "chapter": "34",
                "verses": "31"
            },
            {
                "chapter": "35",
                "verses": "15"
            },
            {
                "chapter": "36",
                "verses": "38"
            },
            {
                "chapter": "37",
                "verses": "28"
            },
            {
                "chapter": "38",
                "verses": "23"
            },
            {
                "chapter": "39",
                "verses": "29"
            },
            {
                "chapter": "40",
                "verses": "49"
            },
            {
                "chapter": "41",
                "verses": "26"
            },
            {
                "chapter": "42",
                "verses": "20"
            },
            {
                "chapter": "43",
                "verses": "27"
            },
            {
                "chapter": "44",
                "verses": "31"
            },
            {
                "chapter": "45",
                "verses": "25"
            },
            {
                "chapter": "46",
                "verses": "24"
            },
            {
                "chapter": "47",
                "verses": "23"
            },
            {
                "chapter": "48",
                "verses": "35"
            }
        ]
    },
    {
        "abbr": "Dan",
        "book": "Daniel",
        "chapters": [
            {
                "chapter": "1",
                "verses": "21"
            },
            {
                "chapter": "2",
                "verses": "49"
            },
            {
                "chapter": "3",
                "verses": "30"
            },
            {
                "chapter": "4",
                "verses": "37"
            },
            {
                "chapter": "5",
                "verses": "31"
            },
            {
                "chapter": "6",
                "verses": "28"
            },
            {
                "chapter": "7",
                "verses": "28"
            },
            {
                "chapter": "8",
                "verses": "27"
            },
            {
                "chapter": "9",
                "verses": "27"
            },
            {
                "chapter": "10",
                "verses": "21"
            },
            {
                "chapter": "11",
                "verses": "45"
            },
            {
                "chapter": "12",
                "verses": "13"
            }
        ]
    },
    {
        "abbr": "Hos",
        "book": "Hosea",
        "chapters": [
            {
                "chapter": "1",
                "verses": "11"
            },
            {
                "chapter": "2",
                "verses": "23"
            },
            {
                "chapter": "3",
                "verses": "5"
            },
            {
                "chapter": "4",
                "verses": "19"
            },
            {
                "chapter": "5",
                "verses": "15"
            },
            {
                "chapter": "6",
                "verses": "11"
            },
            {
                "chapter": "7",
                "verses": "16"
            },
            {
                "chapter": "8",
                "verses": "14"
            },
            {
                "chapter": "9",
                "verses": "17"
            },
            {
                "chapter": "10",
                "verses": "15"
            },
            {
                "chapter": "11",
                "verses": "12"
            },
            {
                "chapter": "12",
                "verses": "14"
            },
            {
                "chapter": "13",
                "verses": "16"
            },
            {
                "chapter": "14",
                "verses": "9"
            }
        ]
    },
    {
        "abbr": "Joel",
        "book": "Joel",
        "chapters": [
            {
                "chapter": "1",
                "verses": "20"
            },
            {
                "chapter": "2",
                "verses": "32"
            },
            {
                "chapter": "3",
                "verses": "21"
            }
        ]
    },
    {
        "abbr": "Amos",
        "book": "Amos",
        "chapters": [
            {
                "chapter": "1",
                "verses": "15"
            },
            {
                "chapter": "2",
                "verses": "16"
            },
            {
                "chapter": "3",
                "verses": "15"
            },
            {
                "chapter": "4",
                "verses": "13"
            },
            {
                "chapter": "5",
                "verses": "27"
            },
            {
                "chapter": "6",
                "verses": "14"
            },
            {
                "chapter": "7",
                "verses": "17"
            },
            {
                "chapter": "8",
                "verses": "14"
            },
            {
                "chapter": "9",
                "verses": "15"
            }
        ]
    },
    {
        "abbr": "Obad",
        "book": "Obadiah",
        "chapters": [
            {
                "chapter": "1",
                "verses": "21"
            }
        ]
    },
    {
        "abbr": "Jonah",
        "book": "Jonah",
        "chapters": [
            {
                "chapter": "1",
                "verses": "17"
            },
            {
                "chapter": "2",
                "verses": "10"
            },
            {
                "chapter": "3",
                "verses": "10"
            },
            {
                "chapter": "4",
                "verses": "11"
            }
        ]
    },
    {
        "abbr": "Mic",
        "book": "Micah",
        "chapters": [
            {
                "chapter": "1",
                "verses": "16"
            },
            {
                "chapter": "2",
                "verses": "13"
            },
            {
                "chapter": "3",
                "verses": "12"
            },
            {
                "chapter": "4",
                "verses": "13"
            },
            {
                "chapter": "5",
                "verses": "15"
            },
            {
                "chapter": "6",
                "verses": "16"
            },
            {
                "chapter": "7",
                "verses": "20"
            }
        ]
    },
    {
        "abbr": "Nah",
        "book": "Nahum",
        "chapters": [
            {
                "chapter": "1",
                "verses": "15"
            },
            {
                "chapter": "2",
                "verses": "13"
            },
            {
                "chapter": "3",
                "verses": "19"
            }
        ]
    },
    {
        "abbr": "Hab",
        "book": "Habakkuk",
        "chapters": [
            {
                "chapter": "1",
                "verses": "17"
            },
            {
                "chapter": "2",
                "verses": "20"
            },
            {
                "chapter": "3",
                "verses": "19"
            }
        ]
    },
    {
        "abbr": "Zeph",
        "book": "Zephaniah",
        "chapters": [
            {
                "chapter": "1",
                "verses": "18"
            },
            {
                "chapter": "2",
                "verses": "15"
            },
            {
                "chapter": "3",
                "verses": "20"
            }
        ]
    },
    {
        "abbr": "Hag",
        "book": "Haggai",
        "chapters": [
            {
                "chapter": "1",
                "verses": "15"
            },
            {
                "chapter": "2",
                "verses": "23"
            }
        ]
    },
    {
        "abbr": "Zech",
        "book": "Zechariah",
        "chapters": [
            {
                "chapter": "1",
                "verses": "21"
            },
            {
                "chapter": "2",
                "verses": "13"
            },
            {
                "chapter": "3",
                "verses": "10"
            },
            {
                "chapter": "4",
                "verses": "14"
            },
            {
                "chapter": "5",
                "verses": "11"
            },
            {
                "chapter": "6",
                "verses": "15"
            },
            {
                "chapter": "7",
                "verses": "14"
            },
            {
                "chapter": "8",
                "verses": "23"
            },
            {
                "chapter": "9",
                "verses": "17"
            },
            {
                "chapter": "10",
                "verses": "12"
            },
            {
                "chapter": "11",
                "verses": "17"
            },
            {
                "chapter": "12",
                "verses": "14"
            },
            {
                "chapter": "13",
                "verses": "9"
            },
            {
                "chapter": "14",
                "verses": "21"
            }
        ]
    },
    {
        "abbr": "Mal",
        "book": "Malachi",
        "chapters": [
            {
                "chapter": "1",
                "verses": "14"
            },
            {
                "chapter": "2",
                "verses": "17"
            },
            {
                "chapter": "3",
                "verses": "18"
            },
            {
                "chapter": "4",
                "verses": "6"
            }
        ]
    },
    {
        "abbr": "Matt",
        "book": "Matthew",
        "chapters": [
            {
                "chapter": "1",
                "verses": "25"
            },
            {
                "chapter": "2",
                "verses": "23"
            },
            {
                "chapter": "3",
                "verses": "17"
            },
            {
                "chapter": "4",
                "verses": "25"
            },
            {
                "chapter": "5",
                "verses": "48"
            },
            {
                "chapter": "6",
                "verses": "34"
            },
            {
                "chapter": "7",
                "verses": "29"
            },
            {
                "chapter": "8",
                "verses": "34"
            },
            {
                "chapter": "9",
                "verses": "38"
            },
            {
                "chapter": "10",
                "verses": "42"
            },
            {
                "chapter": "11",
                "verses": "30"
            },
            {
                "chapter": "12",
                "verses": "50"
            },
            {
                "chapter": "13",
                "verses": "58"
            },
            {
                "chapter": "14",
                "verses": "36"
            },
            {
                "chapter": "15",
                "verses": "39"
            },
            {
                "chapter": "16",
                "verses": "28"
            },
            {
                "chapter": "17",
                "verses": "27"
            },
            {
                "chapter": "18",
                "verses": "35"
            },
            {
                "chapter": "19",
                "verses": "30"
            },
            {
                "chapter": "20",
                "verses": "34"
            },
            {
                "chapter": "21",
                "verses": "46"
            },
            {
                "chapter": "22",
                "verses": "46"
            },
            {
                "chapter": "23",
                "verses": "39"
            },
            {
                "chapter": "24",
                "verses": "51"
            },
            {
                "chapter": "25",
                "verses": "46"
            },
            {
                "chapter": "26",
                "verses": "75"
            },
            {
                "chapter": "27",
                "verses": "66"
            },
            {
                "chapter": "28",
                "verses": "20"
            }
        ]
    },
    {
        "abbr": "Mark",
        "book": "Mark",
        "chapters": [
            {
                "chapter": "1",
                "verses": "45"
            },
            {
                "chapter": "2",
                "verses": "28"
            },
            {
                "chapter": "3",
                "verses": "35"
            },
            {
                "chapter": "4",
                "verses": "41"
            },
            {
                "chapter": "5",
                "verses": "43"
            },
            {
                "chapter": "6",
                "verses": "56"
            },
            {
                "chapter": "7",
                "verses": "37"
            },
            {
                "chapter": "8",
                "verses": "38"
            },
            {
                "chapter": "9",
                "verses": "50"
            },
            {
                "chapter": "10",
                "verses": "52"
            },
            {
                "chapter": "11",
                "verses": "33"
            },
            {
                "chapter": "12",
                "verses": "44"
            },
            {
                "chapter": "13",
                "verses": "37"
            },
            {
                "chapter": "14",
                "verses": "72"
            },
            {
                "chapter": "15",
                "verses": "47"
            },
            {
                "chapter": "16",
                "verses": "20"
            }
        ]
    },
    {
        "abbr": "Luke",
        "book": "Luke",
        "chapters": [
            {
                "chapter": "1",
                "verses": "80"
            },
            {
                "chapter": "2",
                "verses": "52"
            },
            {
                "chapter": "3",
                "verses": "38"
            },
            {
                "chapter": "4",
                "verses": "44"
            },
            {
                "chapter": "5",
                "verses": "39"
            },
            {
                "chapter": "6",
                "verses": "49"
            },
            {
                "chapter": "7",
                "verses": "50"
            },
            {
                "chapter": "8",
                "verses": "56"
            },
            {
                "chapter": "9",
                "verses": "62"
            },
            {
                "chapter": "10",
                "verses": "42"
            },
            {
                "chapter": "11",
                "verses": "54"
            },
            {
                "chapter": "12",
                "verses": "59"
            },
            {
                "chapter": "13",
                "verses": "35"
            },
            {
                "chapter": "14",
                "verses": "35"
            },
            {
                "chapter": "15",
                "verses": "32"
            },
            {
                "chapter": "16",
                "verses": "31"
            },
            {
                "chapter": "17",
                "verses": "37"
            },
            {
                "chapter": "18",
                "verses": "43"
            },
            {
                "chapter": "19",
                "verses": "48"
            },
            {
                "chapter": "20",
                "verses": "47"
            },
            {
                "chapter": "21",
                "verses": "38"
            },
            {
                "chapter": "22",
                "verses": "71"
            },
            {
                "chapter": "23",
                "verses": "56"
            },
            {
                "chapter": "24",
                "verses": "53"
            }
        ]
    },
    {
        "abbr": "John",
        "book": "John",
        "chapters": [
            {
                "chapter": "1",
                "verses": "51"
            },
            {
                "chapter": "2",
                "verses": "25"
            },
            {
                "chapter": "3",
                "verses": "36"
            },
            {
                "chapter": "4",
                "verses": "54"
            },
            {
                "chapter": "5",
                "verses": "47"
            },
            {
                "chapter": "6",
                "verses": "71"
            },
            {
                "chapter": "7",
                "verses": "53"
            },
            {
                "chapter": "8",
                "verses": "59"
            },
            {
                "chapter": "9",
                "verses": "41"
            },
            {
                "chapter": "10",
                "verses": "42"
            },
            {
                "chapter": "11",
                "verses": "57"
            },
            {
                "chapter": "12",
                "verses": "50"
            },
            {
                "chapter": "13",
                "verses": "38"
            },
            {
                "chapter": "14",
                "verses": "31"
            },
            {
                "chapter": "15",
                "verses": "27"
            },
            {
                "chapter": "16",
                "verses": "33"
            },
            {
                "chapter": "17",
                "verses": "26"
            },
            {
                "chapter": "18",
                "verses": "40"
            },
            {
                "chapter": "19",
                "verses": "42"
            },
            {
                "chapter": "20",
                "verses": "31"
            },
            {
                "chapter": "21",
                "verses": "25"
            }
        ]
    },
    {
        "abbr": "Acts",
        "book": "Acts",
        "chapters": [
            {
                "chapter": "1",
                "verses": "26"
            },
            {
                "chapter": "2",
                "verses": "47"
            },
            {
                "chapter": "3",
                "verses": "26"
            },
            {
                "chapter": "4",
                "verses": "37"
            },
            {
                "chapter": "5",
                "verses": "42"
            },
            {
                "chapter": "6",
                "verses": "15"
            },
            {
                "chapter": "7",
                "verses": "60"
            },
            {
                "chapter": "8",
                "verses": "40"
            },
            {
                "chapter": "9",
                "verses": "43"
            },
            {
                "chapter": "10",
                "verses": "48"
            },
            {
                "chapter": "11",
                "verses": "30"
            },
            {
                "chapter": "12",
                "verses": "25"
            },
            {
                "chapter": "13",
                "verses": "52"
            },
            {
                "chapter": "14",
                "verses": "28"
            },
            {
                "chapter": "15",
                "verses": "41"
            },
            {
                "chapter": "16",
                "verses": "40"
            },
            {
                "chapter": "17",
                "verses": "34"
            },
            {
                "chapter": "18",
                "verses": "28"
            },
            {
                "chapter": "19",
                "verses": "41"
            },
            {
                "chapter": "20",
                "verses": "38"
            },
            {
                "chapter": "21",
                "verses": "40"
            },
            {
                "chapter": "22",
                "verses": "30"
            },
            {
                "chapter": "23",
                "verses": "35"
            },
            {
                "chapter": "24",
                "verses": "27"
            },
            {
                "chapter": "25",
                "verses": "27"
            },
            {
                "chapter": "26",
                "verses": "32"
            },
            {
                "chapter": "27",
                "verses": "44"
            },
            {
                "chapter": "28",
                "verses": "31"
            }
        ]
    },
    {
        "abbr": "Rom",
        "book": "Romans",
        "chapters": [
            {
                "chapter": "1",
                "verses": "32"
            },
            {
                "chapter": "2",
                "verses": "29"
            },
            {
                "chapter": "3",
                "verses": "31"
            },
            {
                "chapter": "4",
                "verses": "25"
            },
            {
                "chapter": "5",
                "verses": "21"
            },
            {
                "chapter": "6",
                "verses": "23"
            },
            {
                "chapter": "7",
                "verses": "25"
            },
            {
                "chapter": "8",
                "verses": "39"
            },
            {
                "chapter": "9",
                "verses": "33"
            },
            {
                "chapter": "10",
                "verses": "21"
            },
            {
                "chapter": "11",
                "verses": "36"
            },
            {
                "chapter": "12",
                "verses": "21"
            },
            {
                "chapter": "13",
                "verses": "14"
            },
            {
                "chapter": "14",
                "verses": "23"
            },
            {
                "chapter": "15",
                "verses": "33"
            },
            {
                "chapter": "16",
                "verses": "27"
            }
        ]
    },
    {
        "abbr": "1Cor",
        "book": "1 Corinthians",
        "chapters": [
            {
                "chapter": "1",
                "verses": "31"
            },
            {
                "chapter": "2",
                "verses": "16"
            },
            {
                "chapter": "3",
                "verses": "23"
            },
            {
                "chapter": "4",
                "verses": "21"
            },
            {
                "chapter": "5",
                "verses": "13"
            },
            {
                "chapter": "6",
                "verses": "20"
            },
            {
                "chapter": "7",
                "verses": "40"
            },
            {
                "chapter": "8",
                "verses": "13"
            },
            {
                "chapter": "9",
                "verses": "27"
            },
            {
                "chapter": "10",
                "verses": "33"
            },
            {
                "chapter": "11",
                "verses": "34"
            },
            {
                "chapter": "12",
                "verses": "31"
            },
            {
                "chapter": "13",
                "verses": "13"
            },
            {
                "chapter": "14",
                "verses": "40"
            },
            {
                "chapter": "15",
                "verses": "58"
            },
            {
                "chapter": "16",
                "verses": "24"
            }
        ]
    },
    {
        "abbr": "2Cor",
        "book": "2 Corinthians",
        "chapters": [
            {
                "chapter": "1",
                "verses": "24"
            },
            {
                "chapter": "2",
                "verses": "17"
            },
            {
                "chapter": "3",
                "verses": "18"
            },
            {
                "chapter": "4",
                "verses": "18"
            },
            {
                "chapter": "5",
                "verses": "21"
            },
            {
                "chapter": "6",
                "verses": "18"
            },
            {
                "chapter": "7",
                "verses": "16"
            },
            {
                "chapter": "8",
                "verses": "24"
            },
            {
                "chapter": "9",
                "verses": "15"
            },
            {
                "chapter": "10",
                "verses": "18"
            },
            {
                "chapter": "11",
                "verses": "33"
            },
            {
                "chapter": "12",
                "verses": "21"
            },
            {
                "chapter": "13",
                "verses": "14"
            }
        ]
    },
    {
        "abbr": "Gal",
        "book": "Galatians",
        "chapters": [
            {
                "chapter": "1",
                "verses": "24"
            },
            {
                "chapter": "2",
                "verses": "21"
            },
            {
                "chapter": "3",
                "verses": "29"
            },
            {
                "chapter": "4",
                "verses": "31"
            },
            {
                "chapter": "5",
                "verses": "26"
            },
            {
                "chapter": "6",
                "verses": "18"
            }
        ]
    },
    {
        "abbr": "Eph",
        "book": "Ephesians",
        "chapters": [
            {
                "chapter": "1",
                "verses": "23"
            },
            {
                "chapter": "2",
                "verses": "22"
            },
            {
                "chapter": "3",
                "verses": "21"
            },
            {
                "chapter": "4",
                "verses": "32"
            },
            {
                "chapter": "5",
                "verses": "33"
            },
            {
                "chapter": "6",
                "verses": "24"
            }
        ]
    },
    {
        "abbr": "Phil",
        "book": "Philippians",
        "chapters": [
            {
                "chapter": "1",
                "verses": "30"
            },
            {
                "chapter": "2",
                "verses": "30"
            },
            {
                "chapter": "3",
                "verses": "21"
            },
            {
                "chapter": "4",
                "verses": "23"
            }
        ]
    },
    {
        "abbr": "Col",
        "book": "Colossians",
        "chapters": [
            {
                "chapter": "1",
                "verses": "29"
            },
            {
                "chapter": "2",
                "verses": "23"
            },
            {
                "chapter": "3",
                "verses": "25"
            },
            {
                "chapter": "4",
                "verses": "18"
            }
        ]
    },
    {
        "abbr": "1Thess",
        "book": "1 Thessalonians",
        "chapters": [
            {
                "chapter": "1",
                "verses": "10"
            },
            {
                "chapter": "2",
                "verses": "20"
            },
            {
                "chapter": "3",
                "verses": "13"
            },
            {
                "chapter": "4",
                "verses": "18"
            },
            {
                "chapter": "5",
                "verses": "28"
            }
        ]
    },
    {
        "abbr": "2Thess",
        "book": "2 Thessalonians",
        "chapters": [
            {
                "chapter": "1",
                "verses": "12"
            },
            {
                "chapter": "2",
                "verses": "17"
            },
            {
                "chapter": "3",
                "verses": "18"
            }
        ]
    },
    {
        "abbr": "1Tim",
        "book": "1 Timothy",
        "chapters": [
            {
                "chapter": "1",
                "verses": "20"
            },
            {
                "chapter": "2",
                "verses": "15"
            },
            {
                "chapter": "3",
                "verses": "16"
            },
            {
                "chapter": "4",
                "verses": "16"
            },
            {
                "chapter": "5",
                "verses": "25"
            },
            {
                "chapter": "6",
                "verses": "21"
            }
        ]
    },
    {
        "abbr": "2Tim",
        "book": "2 Timothy",
        "chapters": [
            {
                "chapter": "1",
                "verses": "18"
            },
            {
                "chapter": "2",
                "verses": "26"
            },
            {
                "chapter": "3",
                "verses": "17"
            },
            {
                "chapter": "4",
                "verses": "22"
            }
        ]
    },
    {
        "abbr": "Titus",
        "book": "Titus",
        "chapters": [
            {
                "chapter": "1",
                "verses": "16"
            },
            {
                "chapter": "2",
                "verses": "15"
            },
            {
                "chapter": "3",
                "verses": "15"
            }
        ]
    },
    {
        "abbr": "Phlm",
        "book": "Philemon",
        "chapters": [
            {
                "chapter": "1",
                "verses": "25"
            }
        ]
    },
    {
        "abbr": "Heb",
        "book": "Hebrews",
        "chapters": [
            {
                "chapter": "1",
                "verses": "14"
            },
            {
                "chapter": "2",
                "verses": "18"
            },
            {
                "chapter": "3",
                "verses": "19"
            },
            {
                "chapter": "4",
                "verses": "16"
            },
            {
                "chapter": "5",
                "verses": "14"
            },
            {
                "chapter": "6",
                "verses": "20"
            },
            {
                "chapter": "7",
                "verses": "28"
            },
            {
                "chapter": "8",
                "verses": "13"
            },
            {
                "chapter": "9",
                "verses": "28"
            },
            {
                "chapter": "10",
                "verses": "39"
            },
            {
                "chapter": "11",
                "verses": "40"
            },
            {
                "chapter": "12",
                "verses": "29"
            },
            {
                "chapter": "13",
                "verses": "25"
            }
        ]
    },
    {
        "abbr": "Jas",
        "book": "James",
        "chapters": [
            {
                "chapter": "1",
                "verses": "27"
            },
            {
                "chapter": "2",
                "verses": "26"
            },
            {
                "chapter": "3",
                "verses": "18"
            },
            {
                "chapter": "4",
                "verses": "17"
            },
            {
                "chapter": "5",
                "verses": "20"
            }
        ]
    },
    {
        "abbr": "1Pet",
        "book": "1 Peter",
        "chapters": [
            {
                "chapter": "1",
                "verses": "25"
            },
            {
                "chapter": "2",
                "verses": "25"
            },
            {
                "chapter": "3",
                "verses": "22"
            },
            {
                "chapter": "4",
                "verses": "19"
            },
            {
                "chapter": "5",
                "verses": "14"
            }
        ]
    },
    {
        "abbr": "2Pet",
        "book": "2 Peter",
        "chapters": [
            {
                "chapter": "1",
                "verses": "21"
            },
            {
                "chapter": "2",
                "verses": "22"
            },
            {
                "chapter": "3",
                "verses": "18"
            }
        ]
    },
    {
        "abbr": "1John",
        "book": "1 John",
        "chapters": [
            {
                "chapter": "1",
                "verses": "10"
            },
            {
                "chapter": "2",
                "verses": "29"
            },
            {
                "chapter": "3",
                "verses": "24"
            },
            {
                "chapter": "4",
                "verses": "21"
            },
            {
                "chapter": "5",
                "verses": "21"
            }
        ]
    },
    {
        "abbr": "2John",
        "book": "2 John",
        "chapters": [
            {
                "chapter": "1",
                "verses": "13"
            }
        ]
    },
    {
        "abbr": "3John",
        "book": "3 John",
        "chapters": [
            {
                "chapter": "1",
                "verses": "14"
            }
        ]
    },
    {
        "abbr": "Jude",
        "book": "Jude",
        "chapters": [
            {
                "chapter": "1",
                "verses": "25"
            }
        ]
    },
    {
        "abbr": "Rev",
        "book": "Revelation",
        "chapters": [
            {
                "chapter": "1",
                "verses": "20"
            },
            {
                "chapter": "2",
                "verses": "29"
            },
            {
                "chapter": "3",
                "verses": "22"
            },
            {
                "chapter": "4",
                "verses": "11"
            },
            {
                "chapter": "5",
                "verses": "14"
            },
            {
                "chapter": "6",
                "verses": "17"
            },
            {
                "chapter": "7",
                "verses": "17"
            },
            {
                "chapter": "8",
                "verses": "13"
            },
            {
                "chapter": "9",
                "verses": "21"
            },
            {
                "chapter": "10",
                "verses": "11"
            },
            {
                "chapter": "11",
                "verses": "19"
            },
            {
                "chapter": "12",
                "verses": "17"
            },
            {
                "chapter": "13",
                "verses": "18"
            },
            {
                "chapter": "14",
                "verses": "20"
            },
            {
                "chapter": "15",
                "verses": "8"
            },
            {
                "chapter": "16",
                "verses": "21"
            },
            {
                "chapter": "17",
                "verses": "18"
            },
            {
                "chapter": "18",
                "verses": "24"
            },
            {
                "chapter": "19",
                "verses": "21"
            },
            {
                "chapter": "20",
                "verses": "15"
            },
            {
                "chapter": "21",
                "verses": "27"
            },
            {
                "chapter": "22",
                "verses": "21"
            }
        ]
    }
];
  return vetor[livro].chapters[capitulo-1].verses;
}