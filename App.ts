import {Shape} from "./Shape";
import {Square} from "./Square";
import {Ball} from "./Ball";

function main(): void {

    let square: Square = new Square(24.6, "My Square");
    let ball: Ball = new Ball(15.7, "My Ball");

    square.shapeInfo();
    console.log(square.area());

    ball.shapeInfo();
    console.log(ball.area());


}

main();
