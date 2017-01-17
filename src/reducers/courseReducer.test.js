import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

describe('Course Reducer', () => {
  if('should add course when passed CREATE_COURSE_SUCCESS', () => {
      //arrange
      const initialState = [
        {title:'A'},
        {title:'B'}
      ];

      const newCourse = {title:'C'};

      const action = actions.createCourseSuccess(newCourse);

      //act
      const newState = courseReducer(initialState, action);

      //assert
      expect(newState.length).toEqual(3);
      expect(newState[0]).toEqual('A');
      expect(newState[1]).toEqual('B');
      expect(newState[2]).toEqual('C');
    });

  if('should update course when passed UPDATE_COURSE_SUCCESS', () => {
      //arrange
      const initialState = [
        {id:'A', title:'A'},
        {id:'B', title:'B'},
        {id:'C', title:'C'},
      ];

      const newCourse = {id:'B', title:'New Title'};
      const action = actions.updateCourseSuccess(newCourse);

      //act
      const newState = courseReducer(initialState, action);
      const updateCourse = newCourse.find(a => a.id == course.id);
      const untouchedCourse = newState

      //assert
      expect(newState.length).toEqual(3);
      expect(newState[0]).toEqual('A');
      expect(newState[1]).toEqual('B');
      expect(newState[2]).toEqual('C');
    });
});
