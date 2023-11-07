import { useNavigate } from 'react-router-dom'

import Button from '../../ui/button/Button'

import Layout from '../../layout/Layout'

import styles from './Home.module.scss'

function Home() {
	const navigate = useNavigate()

	return (
		<Layout bgImage='/images/home-bg.jpg'>
			<Button clickHandler={() => navigate('/new-workout')}>New</Button>
			<h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
			{/* TODO: Counters */}
		</Layout>
	)
}

export default Home
