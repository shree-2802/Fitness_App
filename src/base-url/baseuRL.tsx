import axios from "axios";

export const FitnessAPI=axios.create(
    {
        baseURL:'https://exercisedb.p.rapidapi.com/exercises'
    }
)