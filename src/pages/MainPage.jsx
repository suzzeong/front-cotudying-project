import CommonButton from '../components/elements/CommonButton';
import CommonInput from '../components/elements/CommonInput';
import CommonSelect from '../components/elements/CommonSelect';
import CommonText from '../components/elements/CommonText';
import CommonTextarea from '../components/elements/CommonTextarea';

const MainPage = () => {
  return (
    <div>
      <CommonSelect
        ariaLabel='Default select example'
        name='Select your Language'
        value1='Javascript'
        value2='Java'
        value3='Python'
        value4='C'
      />

      <CommonInput
        controlId='floatingInput'
        label='Email address'
        type='email'
        placeholder='name@example.com'
      />

      <CommonTextarea
        controlId='floatingTextarea2'
        label='Comments'
        placeholder='Leave a comment here'
        height='100px'
      />

      <CommonButton
        type='submit'
        variant='primary'
        btnname='basicBtn'
        text='로그인'
      />

      <CommonText>안녕하세요</CommonText>
      <CommonText fs='big' fw='500'>
        안녕하세요
      </CommonText>
    </div>
  );
};

export default MainPage;
