import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import { CreateMessage } from '@abb/controller';
import { InputField } from '../../shared/inputField';
import { Button } from 'antd';

interface FormValues {
  text: string;
}

interface Props {
  listingId: string;
}

export class InputBar extends React.PureComponent<Props> {
  render() {
    const { listingId } = this.props;
    return (
      <CreateMessage>
        {({ createMessage }) => (
          <Formik<{}, FormValues> 
            initialValues={{ text: ''}}
            onSubmit={async ({ text }, { resetForm }) => {
              await createMessage({
                variables: {
                  message: {
                    text,
                    listingId
                  }
                }
              });
              resetForm();
            }}
          >
            {() => (
              <Form>
                <Field name='text' component={InputField} />
                <Button type='primary' htmlType='submit'>Send</Button>
              </Form>
            )}
          </Formik>
        )}
      </CreateMessage>
    );
  }
}
