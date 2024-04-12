

import 'dotenv/config'
import * as joi from 'joi'


interface EnvVars {
	PORT: number
	PRODUCTS_MICROSERICE_HOST:  string,
	PRODUCTS_MICROSERICE_PORT: 	number,
}

const envsSchema = joi.object({
	PORT: joi.number().required(),
	PRODUCTS_MICROSERICE_HOST:  joi.string().required(),
	PRODUCTS_MICROSERICE_PORT: joi.number().required()
})
.unknown(true);

const { error, value} = envsSchema.validate(process.env)

if(error) {  
throw new Error(`Config validation error: ${error.message}`)

}

const envVars: EnvVars = value;

export const env = {
	port: envVars.PORT,
	productsMicroserviceHost: envVars.PRODUCTS_MICROSERICE_HOST,
	productsMicroservicePort: envVars.PRODUCTS_MICROSERICE_PORT
}
