//GET DOM ELEMENTS
const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option_image");

// console.log(gameContainer, userResult, cpuResult, result, optionImages);
optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    userResult.src = cpuResult.src = "images/rock.png";
    result.textContent = "Wait...";

    //Loop through each option image again
    optionImages.forEach((image2, index2) => {
      //   console.log(index, index2);
      index !== index2 && image2.classList.remove("active");
    });

    gameContainer.classList.add("start");

    //SET A TIMEOUT TO DELAY THE RESULT CALCULATION
    let time = setTimeout(() => {
      gameContainer.classList.remove("start");

      //get the source of the clicked option image
      let imageSrc = e.target.querySelector("img").src;
      userResult.src = imageSrc;

      //GENERATE A RANDOM NUMBER B/W 0 and 2
      let randomNumber = Math.floor(Math.random() * 3);
      //CREATE AN ARRAY OF CPU IMAGE OPTIONS
      let cpuImages = [
        "images/rock.png",
        "images/paper.jpeg",
        "images/scissors.png",
      ];
      cpuResult.src = cpuImages[randomNumber];

      let cpuValue = ["R", "P", "S"][randomNumber];
      let userValue = ["R", "P", "S"][index];

      let outComes = {
        RR: "Draw",
        RP: "CPU",
        RS: "User",
        PP: "Draw",
        PR: "User",
        PS: "CPU",
        SS: "Draw",
        SR: "CPU",
        SP: "User",
      };
      let outComeValue = outComes[userValue + cpuValue];
      // console.log(userValue, cpuValue);

      //DISPLAY RESULT
      result.textContent =
        userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`;
    }, 1000);
  });
});
