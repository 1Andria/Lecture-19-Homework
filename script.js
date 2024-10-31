// შექმენით html და js ფაილები , html ში უნდა იყოს h1 თეგში ინფორმაციის დამატება , ასევე უნდა იყოს ერთი ღილაკი სადაც დაჭერის შემთხვევაში ამოაგდებს prompt_ს რომელშიც შეიყვანთ ინფორმაციას , თუ არ შეიყვან უნდა ამომიგდოს ალერტი , ინფორმაციის შეყვანის შემდეგ უნდა გამომიტანოს ul ლისთში li აითემებად ჩემი დამატებული ინფორმაცია , თითოეულ li აითემს უნდა ქონდეს საკუთარი
// წაშლის ღილაკი და დაჭერის შემთვევაში უნდა იშლებოდეს ის ინფორმაცია რომელსაც დავაჭერ.

let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let info = prompt("ინფორმაციის დამატება");
  if (info.length > 0) {
    let UlList = document.createElement("ul");
    document.body.appendChild(UlList);

    let LiList = document.createElement("li");
    UlList.appendChild(LiList);
    LiList.textContent = info;

    let btn = document.createElement("button");
    LiList.appendChild(btn);
    btn.textContent = "remove";

    btn.addEventListener("click", () => {
      if (LiList.children.length > 0) {
        LiList.remove();
      }
    });
  } else {
    alert("შეიყვანეთ ინფორმაცია");
  }
});
