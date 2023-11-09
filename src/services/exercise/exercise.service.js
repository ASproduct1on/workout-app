import { $axios } from '../../api'

const EXERCISES = '/exercises'

class ExerciseService {
	async getAll() {
		return $axios.get(EXERCISES)
	}

	// name, times, iconPath
	async create(body) {
		return $axios.post(EXERCISES, body)
	}

	async update(id, body) {
		return $axios.put(`${EXERCISES}/${id}`, body)
	}

	async delete(id) {
		return $axios.delete(`${EXERCISES}/${id}`)
	}
}

export default new ExerciseService()
