import { Pool } from 'pg'

const connectionString = 'postgresql://postgres:qaninja@pgdb:5432/zombieplus'
const pool = new Pool({ connectionString: connectionString })

export default {
    removeByTitle: (title) => {
        return new Promise((resolve, reject) => {
            pool
                .query(`DELETE FROM public.movies where title = '${title}';`)
                .then(res => {
                    resolve(res)
                })
                .catch(e => reject(e.stack))
        })
    },
    insertMovie: (movie) => {
        let query = `INSERT INTO public.movies(title, status, year, release_date, "cast", overview, cover, created_at, updated_at)
            VALUES ('${movie.title}', '${movie.status}', '${movie.year}', '${movie.releaseDate}', '{${movie.cast}}', '${movie.plot}', '${movie.cover}', current_timestamp, current_timestamp);`
        
        return new Promise((resolve, reject) => {
            pool
                .query(query)
                .then(res => {
                    resolve(res)
                })
                .catch(e => reject(e.stack))
        })

    }
}