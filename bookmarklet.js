javascript:%28function%28%24%29%7Bvar%20songs%3D%24%28%22.songList%20tbody%20input%5Btype%3Dcheckbox%5D%5Bitemtype%3Dsong%5D%22%29%3Bvar%20queue%3Dsongs.toArray%28%29%3Bfunction%20downloadOneSong%28%29%7Bif%28%21queue.length%29return%3Bsongs.each%28function%28i%2Cs%29%7Bif%28s.checked%29%0As.click%28%29%7D%29%3Bvar%20song%3Dqueue.shift%28%29%3Bsong.click%28%29%3BsetTimeout%28function%28%29%7B%24%28%22.downloadButton%22%29.get%280%29.click%28%29%3BsetTimeout%28downloadOneSong%2C2000%29%3B%7D%2C1000%29%3B%7D%0AdownloadOneSong%28%29%3B%7D%29%28jQuery%29%3B