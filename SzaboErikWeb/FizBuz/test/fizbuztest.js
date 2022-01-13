const {test} =QUnit;

QUnit.module("FizBuz", function(){
    test("Létezi e a fizzbuzz fv függvény?", function(assert){
        assert.ok(fizbuz, "létezik");
    });
    test("fizbuz fv-e?", function(assert){
        assert.ok(typeof fizbuz === "function", "függvény");
    });
    test("0 hosszú sorozat", function(assert){
        assert.equal(fizbuz(0), 0);
    });
    test("sem 3-mal, sem 3-tel nem oszthatók", function(assert){
        const tomb=[1,2,4,7,8,11,13,14]
        tomb.forEach(function (elem){
            assert.equal(fizbuzErtek(elem), elem);
        })  
    });
    test("3-mal oszthatók", function(assert){
        const tomb=[3,6,9,12]
        tomb.forEach(function (elem){
            assert.equal(fizbuzErtek(elem), "fiz");
        })  
    });
    test("5-tel oszthatók", function(assert){
        const tomb=[5,10]
        tomb.forEach(function (elem){
            assert.equal(fizbuzErtek(elem), "buz");
        })  
    });
    test("15-tel oszthatók", function(assert){
        const tomb=[15]
        tomb.forEach(function (elem){
            assert.equal(fizbuzErtek(elem), "fizbuz");
        })  
    });
    test("15 hosszú sorozat", function(assert){
        assert.equal(fizbuz(15), "1,2,fiz,4,buz,fiz,7,8,fiz,buz,11,fiz,13,14,fizbuz");
    });



    test("2 hosszú sorozat", function(assert){
        assert.equal(fizbuz(2), "1,2");
    });
    test("3 hosszú sorozat", function(assert){
        assert.equal(fizbuz(3), "1,2,fiz");
    });
    test("4 hosszú sorozat", function(assert){
        assert.equal(fizbuz(4), "1,2,fiz,4");
    });
    test("5 hosszú sorozat", function(assert){
        assert.equal(fizbuz(5), "1,2,fiz,4,buz");
    });
    test("6 hosszú sorozat", function(assert){
        assert.equal(fizbuz(6), "1,2,fiz,4,buz,fiz");
    });




});