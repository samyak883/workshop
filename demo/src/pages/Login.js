 

 import {Form , message } from 'antd'

 function Login(){
 return (
    <div className="register">
     
      <div className="row justify-content-center align-items-center w-100 h-100">
        <div className="col-md-4">
          <Form layout="vertical" >
            <h1>LOGIN</h1>
    

            <Form.Item label="Email" name="email">
             
            </Form.Item>
            <Form.Item label="Password" name="password">
            
            </Form.Item>

            <div className="d-flex justify-content-between align-items-center">
              
                Not Registered Yet , Click Here To Register
             
              <button className="secondary" type="submit">
                LOGIN
              </button>
            </div>
          </Form>
        </div>
        <div className="col-md-5">
          <div className="lottie">
            <lottie-player
              src="https://assets3.lottiefiles.com/packages/lf20_06a6pf9i.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </div>
    </div>
  );
 }

export default Login;