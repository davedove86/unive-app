import {coursesData} from '@/app/placeholder-data';

const ActiveCourseWidget = () => {
  return (
    <div className="home-grid-items grid-1">
      <h2>Active Courses</h2>

      <div className='course-item-wrapper'>
        {coursesData.slice(0, 3).map((course) => (
          <div key={course.id} className='course-item'>
            <div>
              <img src={course.icon}/>
            </div>
            <div className='course-item-number-wrapper'>
              <div className="pill-wrapper">
                <p className='pill'>{course.course}</p>
                <p>{course.subject}</p>
              </div>
            </div>
            <div className="course-item-number-wrapper">
              <p className='course-item-number'>{course.currentGrade}</p>
              <p className='course-item-name'>Current Grade</p>
            </div>
            <div className="course-item-number-wrapper">
              <p className='course-item-number'>{course.gradeAverage}</p>
              <p className='course-item-name'>Grade Average</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default ActiveCourseWidget
