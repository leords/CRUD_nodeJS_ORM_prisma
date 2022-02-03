import prismaClient from "../prisma";

class SearchWeatherService {
    async execute(id_weather:string) {
        const search = await prismaClient.weather.findUnique({
            where: {
                id:id_weather
            }
        });
        return search
    }
}

export {SearchWeatherService}