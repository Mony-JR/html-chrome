var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      var counteven = 0;
      var countodd = 0;

      for (let index = 1; index <= 10; index++) {
        if (index % 2 == 0) {
          counteven++;
        } else if (index % 2 != 0) {
          countodd++;
        }
      }

      console.log("Even number:", counteven);
      console.log("odd number:", countodd);