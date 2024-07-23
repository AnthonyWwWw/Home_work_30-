import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import UseForm from '../widget/UseForm';
import TaskItem from '../widget/TaskItem';
import { taskAsyncActions } from '../saga/asyncActions';

function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(taskAsyncActions.loadTasksAsync());
  }, [dispatch]);


  const handelAddTask = (values, resetForm) => {
    dispatch(taskAsyncActions.addTaskAsync(values));
    resetForm();
  };

  return (
    <main className="main">
      <div className="main__form-content">
        <Formik
          initialValues={{ task: '' }}
          onSubmit={(values, { resetForm }) => {
            handelAddTask(values, resetForm);
          }}
        >
          {() => (
            <Form>
              <UseForm id="task-field" label="New ToDo" name="task" />
            </Form>
          )}
        </Formik>
      </div>
      <TaskItem></TaskItem>
    </main>
  );
}

export default Main;
