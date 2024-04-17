import { Type } from "class-transformer";
import { IsNumber, IsString, Min } from "class-validator";

export class CreateProductDto {

	@IsString()
	public name : string;

	@IsNumber({ maxDecimalPlaces: 4,})
	@Min(0)  // el numero minimo que puede aceptar es 0
	@Type(() => Number) // intenta convertir el tipo string a un numero
	public price: number;


}
