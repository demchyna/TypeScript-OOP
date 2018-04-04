import Square from "./Square";
import Shape from "./Shape";
import {Color} from "./Color";

function main(): void {

    let square: Shape = new Square("Square", Color.Blue,5.28);
    //console.log(square.side);

    square.shapeInfo();

    //let shape = new Shape();


}

/*function hasPerimeter(shape: any): shape is IPerimeter {
    return (shape as IPerimeter).perimeter !== undefined;
}*/

/*function hasVolume(shape: any): shape is IVolume {
    return (shape as IVolume).volume !== undefined;
}*/

main();