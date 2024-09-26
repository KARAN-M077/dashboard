import React, { useState, useEffect } from 'react';
import { Country, State, City } from 'country-state-city';
import { Link, useNavigate } from 'react-router-dom';
import Signupanimation from '../../assets/Animation/Animation';

function Signup() {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [contact, setContact] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const countryList = Country.getAllCountries();
    setCountries(countryList);
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      const stateList = State.getStatesOfCountry(selectedCountry);
      setStates(stateList);
      setCities([]);
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedState) {
      const cityList = City.getCitiesOfState(selectedCountry, selectedState);
      setCities(cityList);
    }
  }, [selectedState, selectedCountry]);

  const handleSignup = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch('http://54.175.157.160:8080/api/auth/college-register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          collegeName,
          location: `${selectedCity}, ${selectedState}`,
          email,
          password,
          contact,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        if (data.code === 201) {
          navigate('/Home'); // Navigate on successful signup
        }
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Signup failed');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <div className='bg-[#F5F3ED] px-16 h-[100vh] overflow-y-scroll flex flex-row-reverse justify-center gap-16 mt-[1%] mx-auto align-middle items-center w-full max550:flex-col max550:px-5 ' style={{ fontFamily: 'Work Sans, sans-serif' }}>
        <div className='w-[50%] h-[90vh] mt-10 bg-[#9cc6fd] rounded-3xl max850:hidden'>
          <Signupanimation/>
        </div>
        <div className='text-black gap-8 flex flex-col justify-center w-[33%] max550:w-full max850:w-full'>
          <h1 className='text-5xl font-semibold text-center text-[#383838] '>SignUp your college here</h1>
          <div className='flex flex-col px-[5%] gap-6'>
            <input
              placeholder='Enter college name'
              type='text'
              className='bg-transparent border border-slate-400 rounded-[5px] px-4 py-[9px]'
              value={collegeName}
              onChange={(e) => setCollegeName(e.target.value)}
            />
          </div>

          {/* Country Dropdown */}
          <div className='flex flex-col px-[5%] gap-6 justify-center align-middle w-full'>
            <select
              className='bg-transparent border border-slate-400 rounded-[5px] px-4 pr-4 py-[9px]'
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              <option value=''>Select Country</option>
              {countries.map((country) => (
                <option key={country.isoCode} value={country.isoCode}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          {/* State Dropdown */}
          <div className='flex flex-col px-[5%] gap-6 justify-center align-middle w-full'>
            <select
              className='bg-transparent border border-slate-400 rounded-[5px] px-4 py-[9px]'
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              disabled={!selectedCountry}
            >
              <option value=''>Select State</option>
              {states.map((state) => (
                <option key={state.isoCode} value={state.isoCode}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>

          {/* College Email and Password */}
          <div className='flex flex-col px-[5%] gap-6 justify-center align-middle w-full mt-0'>
            <input
              type='email'
              placeholder='Enter college email'
              className='bg-transparent border border-slate-400 rounded-[5px] px-4 py-[9px]'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='password'
              placeholder='Enter college password'
              className='bg-transparent border border-slate-400 rounded-[5px] px-4 py-[9px]'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type='password'
              placeholder='Confirm password'
              className='bg-transparent border border-slate-400 rounded-[5px] px-4 py-[9px]'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {/* College Contact */}
          <div className='flex flex-col px-[5%] gap-6 justify-center align-middle w-full'>
            <input
              type='number'
              placeholder='Enter college contact number'
              className='bg-transparent border border-slate-400 rounded-[5px] px-4 py-[9px]'
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>

          <div className='flex justify-center mx-auto w-[90%] max550:w-full max550:px-5'>
            <Link to='/dashboard'  className='text-center text-white bg-[#FC661A] rounded-[5px] py-[10px] w-full active:bg-[#D94F12] transition duration-150 ease-in-out text-[18px]'>
              SignUp
            </Link>
          </div>

          {error && <p className='text-red-500 text-center mt-4'>{error}</p>}
        </div>
      </div>
    </>
  );
}

export default Signup;


 
  {/* <div className='text-black gap-8 flex flex-col justify-center w-[33%] max550:w-full'>
        <div className='flex flex-col px-[5%] gap-1 justify-center align-middle w-full'>
          <label>Subscription starting date</label>
          <input type='date' className='bg-transparent border border-slate-400 rounded-[5px] px-4 py-[9px]' />
        </div>

        <div className='flex flex-col px-[5%] gap-1 justify-center align-middle w-full'>
          <label>Subscription ending date</label>
          <input type='date' className='bg-transparent border border-slate-400 rounded-[5px] px-4 py-[9px]' />
        </div>
        <div className='flex flex-col px-[5%] gap-6 justify-center align-middle w-full'>
          <select className='bg-transparent border border-slate-400 rounded-[5px] px-4 py-[9px]'>
            <option>Payment completed</option>
            <option>True</option>
            <option>False</option>
          </select>
        </div>
        <div className='flex flex-col px-[5%] gap-6 justify-center align-middle w-full'>
          <input type='number' placeholder='Enter total number of departments' className='bg-transparent border border-slate-400 rounded-[5px] px-4 py-[9px]' />
        </div>
        <div className='flex flex-col px-[5%] gap-6 justify-center align-middle w-full'>
          <input type='number' placeholder='Enter total number of students' className='bg-transparent border border-slate-400 rounded-[5px] px-4 py-[9px]' />
        </div>
        <div className='flex flex-col px-[5%] gap-6 justify-center align-middle w-full'>
          <input type='email' placeholder='Enter alternate email' className='bg-transparent border border-slate-400 rounded-[5px] px-4 py-[9px]' />
        </div>
        
      </div> */}