export const Total = ({ exercises }) => {
    return (
        <p>Total number of exercises is {exercises.map((course) => course.exercises).reduce((acc, exercise) => acc + exercise)}</p>
    )
}

