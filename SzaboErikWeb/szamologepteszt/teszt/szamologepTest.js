const {test} =QUnit;



QUnit.module('Összeadás', function(h) {
    //ha az összeadás modulban vagyok benne, akkor mindenképp kell a szamologepet példányosítani
    h.before(()=>{
        //osztálypéldány, így nem constal hanem thisel tudunk hivatkozni, létrehozunk új adattagot
        //mindig le fog futni mielőtt 1 1 tesz lefutna
        this.szamologep = new Szamologep();
    })
    test('Létezik e az összeadás függvény?', (assert)=> {
        assert.ok(this.szamologep.osszead, "Létezik");
      });
      test('Létezik e az összeadás függvény?', (assert)=> {
        assert.ok(typeof this.szamologep.osszead === "function", "függvény!");
      });
    //nyíl függvény kell, mert a this a functionon belüli példányra mutatna, ami ezeknél nincs
    test('Két pozitív szám', (assert)=> {
      assert.equal(this.szamologep.osszead(1, 2), 3);
    });
    //assert. equal: az equal a visszatérési értékekre teszt
    test('Pozitív szám, 0', (assert)=> {
        assert.equal(this.szamologep.osszead(1, 0), 1);
      });
      test('Pozitív és negatív szám', (assert)=> {
        assert.equal(this.szamologep.osszead(-1, 2), 1);
      });
      test('Szövegként megadott szám', (assert)=> {
        assert.equal(this.szamologep.osszead(1, "2"), 3);
      });
      test('Szövegként megadott szám2', (assert)=> {
        assert.equal(this.szamologep.osszead(1, "-2"), -1);
      });
      test('Szöveges paraméter', (assert)=> {
        assert.equal(this.szamologep.osszead(1, "a"), "legalább az egyik paraméter nem szám!");
      });
      test('Nagy szám', (assert)=> {
        //console.log(Number.MAX_SAFE_INTEGER);
        assert.equal(this.szamologep.osszead(1, Number.MAX_SAFE_INTEGER), "Túlcsordulás!");
      });
      test('Kis szám', (assert)=> {
        //console.log(Number.MAX_SAFE_INTEGER);
        assert.equal(this.szamologep.osszead(-1, Number.MIN_SAFE_INTEGER), "Túlcsordulás!");
      });
  });

  QUnit.module('Kivonás', function(b) {
    b.before(()=>{
        this.szamologep = new Szamologep();
    });
    test('Létezik e az összeadás függvény?', (assert)=> {
        assert.ok(this.szamologep.kivonas, "Létezik");
      });
      test('Létezik e az összeadás függvény?', (assert)=> {
        assert.ok(typeof this.szamologep.kivonas === "function", "függvény!");
      });
    //nyíl függvény kell, mert a this a functionon belüli példányra mutatna, ami ezeknél nincs
    test('Két pozitív szám', (assert)=> {
      assert.equal(this.szamologep.kivonas(1, 1), 0);
    });
    //assert. equal: az equal a visszatérési értékekre teszt
    test('Pozitív szám, 0', (assert)=> {
        assert.equal(this.szamologep.kivonas(1, 0), 1);
      });
      test('Pozitív és negatív szám', (assert)=> {
        assert.equal(this.szamologep.kivonas(-3, 2), -5);
      });
      test('Szövegként megadott szám', (assert)=> {
        assert.equal(this.szamologep.kivonas(1, "2"), -1);
      });
      test('Szövegként megadott szám2', (assert)=> {
        assert.equal(this.szamologep.kivonas(1, "-2"), 3);
      });
      test('Szöveges paraméter', (assert)=> {
        assert.equal(this.szamologep.kivonas(1, "a"), "legalább az egyik paraméter nem szám!");
      });
      test('Nagy szám', (assert)=> {
        //console.log(Number.MAX_SAFE_INTEGER);
        assert.equal(this.szamologep.kivonas(1, Number.MAX_SAFE_INTEGER), "Túlcsordulás!");
      });
      test('Kis szám', (assert)=> {
        //console.log(Number.MAX_SAFE_INTEGER);
        assert.equal(this.szamologep.kivonas(-1, Number.MIN_SAFE_INTEGER), "Túlcsordulás!");
      });
  });