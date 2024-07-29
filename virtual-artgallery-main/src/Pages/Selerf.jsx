import React, { useState } from 'react';
import './Sel.css'
import { Link, useNavigate } from 'react-router-dom';
const Selerf = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    title: '',
    materials: '',
    height: '',
    width: '',
    country: '',
    city: '',
    proof: '',
    artFile: '',
    artCategory: '',
    password:''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ''
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      navigate("/");
    }
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.name) {
      errors.name = 'Name is required';
    }
    if (!data.email) {
      errors.email = 'Email is required';
    }
    if(!data.phoneNumber){
      errors.phoneNumber='Phone Number is required';
    }
    if(!data.title)
    {
      errors.title='Title is required';
    }
    if(!data.materials)
    {
      errors.materials='Materials are required';
    }
    if(!data.country)
    {
      errors.country='Country is required';
    }
    if(!data.city)
    {
      errors.city='City is required';
    }
    if(!data.height)
    {
      errors.height='Height is required';
    }
    if(!data.width)
    {
      errors.width='Width is required';
    }
    if(!data.proof)
    {
      errors.proof='Proof is required';
    }
    if(!data.artCategory)
    {
      errors.artCategory='Category is required';
    }
    if(!data.artFile)
    {
      errors.artFile='File is required';
    }
    setErrors(errors);
    return errors;
  };
  const [isSecondDivisionVisible1, setIsSecondDivisionVisible1] = useState(false);
  const [isSecondDivisionVisible2, setIsSecondDivisionVisible2] = useState(false);
  const [isSecondDivisionVisible3, setIsSecondDivisionVisible3] = useState(false);
  const [isSecondDivisionVisible4, setIsSecondDivisionVisible4] = useState(false);
  const [isSecondDivisionVisible5, setIsSecondDivisionVisible5] = useState(false);
  const [isSecondDivisionVisible6, setIsSecondDivisionVisible6] = useState(false);
  const [isSecondDivisionVisible7, setIsSecondDivisionVisible7] = useState(false);
  const [isSecondDivisionVisible8, setIsSecondDivisionVisible8] = useState(false);
  const [isSecondDivisionVisible9, setIsSecondDivisionVisible9] = useState(false);
  const [isSecondDivisionVisible10, setIsSecondDivisionVisible10] = useState(false);
  const [isSecondDivisionVisible11, setIsSecondDivisionVisible11] = useState(false);
  const [isSecondDivisionVisible12, setIsSecondDivisionVisible12] = useState(false);
  const [isSecondDivisionVisible13, setIsSecondDivisionVisible13] = useState(false);
  const [isSecondDivisionVisible14, setIsSecondDivisionVisible14] = useState(false);
  const hcl1101 = () => {
    setIsSecondDivisionVisible1(!isSecondDivisionVisible1);
  };
  const hcl2101 = () => {
    setIsSecondDivisionVisible2(!isSecondDivisionVisible2);
  };
  const hcl3101 = () => {
    setIsSecondDivisionVisible3(!isSecondDivisionVisible3);
  };
  const hcl4101 = () => {
    setIsSecondDivisionVisible4(!isSecondDivisionVisible4);
  };
  const hcl5101 = () => {
    setIsSecondDivisionVisible5(!isSecondDivisionVisible5);
  };
  const hcl6101 = () => {
    setIsSecondDivisionVisible6(!isSecondDivisionVisible6);
  };
  const hcl7101 = () => {
    setIsSecondDivisionVisible7(!isSecondDivisionVisible7);
  };
  const hcl8101 = () => {
    setIsSecondDivisionVisible8(!isSecondDivisionVisible8);
  };
  const hcl9101 = () => {
    setIsSecondDivisionVisible9(!isSecondDivisionVisible9);
  };
  const hcl10101 = () => {
    setIsSecondDivisionVisible10(!isSecondDivisionVisible10);
  };
  const hcl11101 = () => {
    setIsSecondDivisionVisible11(!isSecondDivisionVisible11);
  };
  const hcl12101 = () => {
    setIsSecondDivisionVisible12(!isSecondDivisionVisible12);
  };
  const hcl13101 = () => {
    setIsSecondDivisionVisible13(!isSecondDivisionVisible13);
  };
  const hcl14101 = () => {
    setIsSecondDivisionVisible14(!isSecondDivisionVisible14);
  };

  return (
    <div id="whole101">
    <div id="wholepgcont101">
    <div id="wholesidecont101">
      <h2 style={{fontSize:'25px',marginLeft:'20px',fontFamily:'Courier New'}}>Top Sell's</h2>
      <div class="sidecont101">
            <div id='img1101'></div>
          </div>
          <div id="pr101">
              <h3>$1,00,000</h3>
            </div>
          <div class="sidecont101">
            <div id='img2101'></div>
          </div>
          <div id="pr101">
              <h3>$99,000</h3>
            </div>
          <div class="sidecont101">
            <div id='img3101'></div>
          </div>
          <div id="pr101">
              <h3>$97,500</h3>
            </div>
          <div class="sidecont101">
            <div id='img4101'></div>
          </div>
          <div id="pr101">
              <h3>$93,200</h3>
            </div>
          <div class="sidecont101">
            <div id='img5101'></div>
          </div>
          <div id="pr101">
              <h3>$93,000</h3>
            </div>
      <div class="sidecont101">
            <div id='img6101'></div>
          </div>
          <div id="pr101">
              <h3>$92,800</h3>
            </div>
          <div class="sidecont101">
            <div id='img7101'></div>
          </div>
          <div id="pr101">
              <h3>$91,900</h3>
            </div>
          <div class="sidecont101">
            <div id='img8101'></div>
          </div>
          <div id="pr101">
              <h3>$90,000</h3>
            </div>
          <div class="sidecont101">
            <div id='img9101'></div>
          </div>
          <div id="pr101">
              <h3>$89,990</h3>
            </div>
          <div class="sidecont101">
            <div id='img10101'></div>
          </div>
          <div id="pr101">
              <h3>$89,000</h3>
            </div>
      <div class="sidecont101">
            <div id='img11101'></div>
          </div>
          <div id="pr101">
              <h3>$88,000</h3>
            </div>
          <div class="sidecont101">
            <div id='img12101'></div>
          </div>
          <div id="pr101">
              <h3>$86,900</h3>
            </div>
          <div class="sidecont101">
            <div id='img13101'></div>
          </div>
          <div id="pr101">
              <h3>$85,800</h3>
            </div>
          <div class="sidecont101">
            <div id='img14101'></div>
          </div>
          <div id="pr101">
              <h3>$84,100</h3>
            </div>
          <div class="sidecont101">
            <div id='img15101'></div>
          </div>
          <div id="pr101">
              <h3>$84,000</h3>
            </div>
            <div class="sidecont101">
            <div id='img16101'></div>
          </div>
          <div id="pr101">
              <h3>$83,500</h3>
            </div>
          <div class="sidecont101">
            <div id='img17101'></div>
          </div>
          <div id="pr101">
              <h3>$82,454</h3>
            </div>
          <div class="sidecont101">
            <div id='img18101'></div>
          </div>
          <div id="pr101">
              <h3>$81,800</h3>
            </div>
          <div class="sidecont101">
            <div id='img19101'></div>
          </div>
          <div id="pr101">
              <h3>$80,000</h3>
            </div>
          <div class="sidecont101">
            <div id='img20101'></div>
          </div>
          <div id="pr101">
              <h3>$78,000</h3>
            </div>
      <div class="sidecont101">
            <div id='img21101'></div>
          </div>
          <div id="pr101">
              <h3>$77,000</h3>
            </div>
          <div class="sidecont101">
            <div id='img22101'></div>
          </div>
          <div id="pr101">
              <h3>$75,000</h3>
            </div>
          <div class="sidecont101">
            <div id='img23101'></div>
          </div>
          <div id="pr101">
              <h3>$74,800</h3>
            </div>
          <div class="sidecont101">
            <div id='img24101'></div>
          </div>
          <div id="pr101">
              <h3>$73,500</h3>
            </div>
          <div class="sidecont101">
            <div id='img25101'></div>
          </div>
          <div id="pr101">
              <h3>$72,000</h3>
            </div>
      <div class="sidecont101">
            <div id='img26101'></div>
          </div>
          <div id="pr101">
              <h3>$71,990</h3>
            </div>
          <div class="sidecont101">
            <div id='img27101'></div>
          </div>
          <div id="pr101">
              <h3>$70,999</h3>
            </div>
          <div class="sidecont101">
            <div id='img28101'></div>
          </div>
          <div id="pr101">
              <h3>$69,850</h3>
            </div>
          <div class="sidecont101">
            <div id='img29101'></div>
          </div>
          <div id="pr101">
              <h3>$65,000</h3>
            </div>
          <div class="sidecont101">
            <div id='img31101'></div>
          </div>
          <div id="pr101">
              <h3>$64,000</h3>
            </div>
          <div class="sidecont101">
            <div id='img32101'></div>
          </div>
          <div id="pr101">
              <h3>$63,900</h3>
            </div>
          <div class="sidecont101">
            <div id='img33101'></div>
          </div>
          <div id="pr101">
              <h3>$63,000</h3>
            </div>
          <div class="sidecont101">
            <div id='img34101'></div>
          </div>
          <div id="pr101">
              <h3>$62,170</h3>
            </div>
          <div class="sidecont101">
            <div id='img35101'></div>
          </div>
          <div id="pr101">
              <h3>$61,000</h3>
            </div>
          <div class="sidecont101">
            <div id='img36101'></div>
          </div>
          <div id="pr101">
              <h3>$60,899</h3>
            </div>
          <div class="sidecont101">
            <div id='img37101'></div>
          </div>
          <div id="pr101">
              <h3>$59,000</h3>
            </div>
          <div class="sidecont101">
            <div id='img38101'></div>
          </div>
          <div id="pr101">
              <h3>$58,800</h3>
            </div>
          <div class="sidecont101">
            <div id='img39101'></div>
          </div>
          <div id="pr101">
              <h3>$57,700</h3>
            </div>
          <div class="sidecont101">
            <div id='img40101'></div>
          </div>
          <div id="pr101">
              <h3>$56,000</h3>
            </div>
          <div class="sidecont101">
            <div id='img41101'></div>
          </div>
          <div id="pr101">
              <h3>$55,900</h3>
            </div>
          <div class="sidecont101">
            <div id='img42101'></div>
          </div>
          <div id="pr101">
              <h3>$54,990</h3>
            </div>
          <div class="sidecont101">
            <div id='img43101'></div>
          </div>
          <div id="pr101">
              <h3>$54,800</h3>
            </div>
          <div class="sidecont101">
            <div id='img44101'></div>
          </div>
          <div id="pr101">
              <h3>$54,000</h3>
            </div>
          <div class="sidecont101">
            <div id='img45101'></div>
          </div>
          <div id="pr101">
              <h3>$53,000</h3>
            </div>
          <div class="sidecont101">
            <div id='img46101'></div>
          </div>
          <div id="pr101">
              <h3>$52,900</h3>
            </div>
          <div class="sidecont101">
            <div id='img47101'></div>
          </div>
          <div id="pr101">
              <h3>$51,900</h3>
            </div>
          <div class="sidecont101">
            <div id='img48101'></div>
          </div>
          <div id="pr101">
              <h3>$50,500</h3>
            </div>
          <div class="sidecont101">
            <div id='img49101'></div>
          </div>
          <div id="pr101">
              <h3>$50,300</h3>
            </div>
          <div class="sidecont101">
            <div id='img50101'></div>
          </div>
          <div id="pr101">
              <h3>$49,500</h3>
            </div>
    </div></div> 
     <div id="wholepgcont101">
    <h3 style={{fontSize:'25px',marginLeft:'20px',fontFamily:'Courier New'}}>Seller Form</h3>
      <div id="hpgtop101">
      <div className="form101">

      <form onSubmit={handleSubmit}>
        <div className="fg101">
          <label id ="#label101">Name:</label><br></br>
          <input type="text" id="inp101" name="name" value={formData.name} onChange={handleChange} placeholder={errors.name}/>
        </div>

        <div className="fg101">
          <label id ="#label101">Email:</label><br></br>
          <input type="email" id="inp101" name="email" value={formData.email} onChange={handleChange} placeholder={errors.email}/>
        </div>
        <div className="fg101">
          <label id ="#label101">Phone Number:</label><br></br>
          <input type="text" id="inp101" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder={errors.phoneNumber}/>
        </div>
        <div className="fg101">
          <label id ="#label101">Title:</label><br></br>
          <input type="text" id="inp101" name="title" value={formData.title} onChange={handleChange} placeholder={errors.title}/>
        </div>
        <div className="fg101">
          <label id ="#label101">Materials:</label><br></br>
          <input type="text" id="inp101" name="materials" value={formData.materials} onChange={handleChange} placeholder={errors.materials}/>
        </div>
        <div className="fg101">
          <label id ="#label101">Height:</label><br></br>
          <input type="text" id="inp101" name="height" value={formData.height} onChange={handleChange} placeholder={errors.height}/>
        </div>
        <div className="fg101">
          <label id ="#label101">Width:</label><br></br>
          <input type="text" id="inp101" name="width" value={formData.width} onChange={handleChange} placeholder={errors.width}/>
        </div>
        <div className="fg101">
          <label id ="#label101">Country:</label><br></br>
          <input type="text" id="inp101" name="country" value={formData.country} onChange={handleChange} placeholder={errors.country}/>
        </div>
        <div className="fg101">
          <label id ="#label101">City:</label><br></br>
          <input type="text" id="inp101" name="city" value={formData.city} onChange={handleChange} placeholder={errors.city}/>
        </div>
        <div className="fg101">
          <label id ="#label101">Proof:</label><br></br>
          <input type="file" id="inp101" name="proof" onChange={handleChange} placeholder={errors.proof}/>
        </div>
        <div className="fg101">
          <label id ="#label101">Category of Art:</label><br></br>
          <input type="text" id="inp101" name="artCategory" value={formData.artCategory} onChange={handleChange} placeholder={errors.artCategory}/>
        </div>
        <div className="fg101">
          <label id ="#label101">Upload Your Art:</label><br></br>
          <input type="file" id="inp101" name="artFile" onChange={handleChange} placeholder={errors.artfile}/>
        </div>
        <button type="submit" id="sbutton101">Submit</button>
      </form>
    </div>
      </div>
      <div id="tbtct101">
        <br></br>
          <h1>live locations of our office </h1><br></br>
          <h2 style={{fontFamily:'Courier New',marginLeft:'40px'}}>London, England</h2>
          <a href="https://www.google.co.in/maps/place/London,+UK/@51.5285262,-0.266405,11z/data=!3m1!4b1!4m6!3m5!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5072178!4d-0.1275862!16zL20vMDRqcGw?entry=ttu"><button type="button" id="ll101">live location</button></a><br></br><br></br>
          <h2 style={{fontFamily:'Courier New',marginLeft:'40px'}}>Moscow, Russia</h2>
          <a href="https://www.google.co.in/maps/place/Moscow,+Russia/@55.580257,36.7261906,9z/data=!3m1!4b1!4m6!3m5!1s0x46b54afc73d4b0c9:0x3d44d6cc5757cf4c!8m2!3d55.755826!4d37.6172999!16zL20vMDRzd2Q?entry=ttu"><button type="button" id="ll101">live location</button></a><br></br><br></br>
          <h2 style={{fontFamily:'Courier New',marginLeft:'40px'}}>Paris, France</h2>
          <a href="https://www.google.co.in/maps/place/Paris,+France/@48.8588255,2.2646345,12z/data=!3m1!4b1!4m6!3m5!1s0x47e66e1f06e2b70f:0x40b82c3688c9460!8m2!3d48.856614!4d2.3522219!16zL20vMDVxdGo?entry=ttu"><button type="button" id="ll101">live location</button></a><br></br><br></br>
          <h2 style={{fontFamily:'Courier New',marginLeft:'40px'}}>Hong Kong, China</h2>
          <a href="https://www.google.co.in/maps/place/Hong+Kong/@22.3523907,113.8097403,10z/data=!3m1!4b1!4m6!3m5!1s0x3403e2eda332980f:0xf08ab3badbeac97c!8m2!3d22.3193039!4d114.1693611!16zL20vMDNoNjQ?entry=ttu"><button type="button" id="ll101">live location</button></a><br></br><br></br>
          <h2 style={{fontFamily:'Courier New',marginLeft:'40px'}}>Dubai, UAE</h2>
          <a href="https://www.google.co.in/maps/place/Dubai+-+United+Arab+Emirates/@25.0756584,54.8978298,10z/data=!3m1!4b1!4m6!3m5!1s0x3e5f43496ad9c645:0xbde66e5084295162!8m2!3d25.2048493!4d55.2707828!16zL20vMDFmMDhy?entry=ttu"><button type="button" id="ll101">live location</button></a><br></br><br></br>
      </div>
    </div> 
     <div id="wholepgcont101">
    <h1 style={{fontSize:'30px',marginLeft:'20px',fontFamily:'Courier New'}}>MEET OUR MANAGER's</h1>
      <div id="hgtopright101">
      <div class="rsidecont101">
            <div id='rimg1101'>
            </div>
            {isSecondDivisionVisible1 && (
        <div id="msg101">
          Gmail - TinCooper@Vags.com
        </div>
      )}
            <div>
            <button type="button"id="det101" onClick={hcl1101}>-TIN COOPER</button>
            </div>
           
          </div>
          <div class="rsidecont101">
            <div id='rimg2101'></div>
            
            <div>
            {isSecondDivisionVisible2 && (
        <div id="msg101">
          Gmail - MartinSek@Vags.com
        </div>
      )}
            <button type="button"id="det101" onClick={hcl2101}>-MARTIN SEK</button>
            </div>

          </div>
          <div class="rsidecont101">
            <div id='rimg3101'></div>
            <div>
            {isSecondDivisionVisible3 && (
        <div id="msg101">
          Gmail - Joellil@Vags.com
        </div>
      )}
            <button type="button"id="det101" onClick={hcl3101}>-JOEL LIL</button>
            </div>
          </div>
          <div class="rsidecont101">
            <div id='rimg4101'></div>
            <div>
            {isSecondDivisionVisible4 && (
        <div id="msg101">
          Gmail - Georgeblack@Vags.com
        </div>
      )}
            <button type="button"id="det101" onClick={hcl4101}>-GEORGE BLACK</button>
            </div>
          </div>
      <div class="rsidecont101">
            <div id='rimg5101'></div>
            <div>
            {isSecondDivisionVisible5 && (
        <div id="msg101">
          Gmail - Lilyjoseph@Vags.com
        </div>
      )}
            <button type="button"id="det101" onClick={hcl5101}>-LILY JOSEPH</button>
            </div>
          </div>
          <div class="rsidecont101">
            <div id='rimg6101'></div>
            <div>
            {isSecondDivisionVisible6 && (
        <div id="msg101">
          Gmail - Torykk@Vags.com
        </div>
      )}
            <button type="button"id="det101" onClick={hcl6101}>-TORY KKACK</button>
            </div>
          </div>
          <div class="rsidecont101">
            <div id='rimg7101'></div>
            <div>
            {isSecondDivisionVisible7 && (
        <div id="msg101">
          Gmail - Abgelaalzi@Vags.com
        </div>
      )}
            <button type="button"id="det101" onClick={hcl7101}>-ANGELA ALZI</button>
            </div>
          </div>
          <div class="rsidecont101">
            <div id='rimg8101'></div>
            <div>
            {isSecondDivisionVisible8 && (
        <div id="msg101">
          Gmail - MartsonMartin@Vags.com
        </div>
      )}
            <button type="button"id="det101" onClick={hcl8101}>-MARTSON MARTIN</button>
            </div>
          </div>
          <div class="rsidecont101">
            <div id='rimg9101'></div>
            <div>
            {isSecondDivisionVisible9 && (
        <div id="msg101">
          Gmail - Rosyjin@Vags.com
        </div>
      )}
            <button type="button"id="det101" onClick={hcl9101}>-ROSY JIN</button>
            </div>
          </div>
      <div class="rsidecont101">
            <div id='rimg10101'></div>
            <div>
            {isSecondDivisionVisible10 && (
        <div id="msg101">
          Gmail - Alzjosh@Vags.com
        </div>
      )}
            <button type="button"id="det101" onClick={hcl10101}>-ALZARI JOSH</button>
            </div>
          </div>
          <div class="rsidecont101">
            <div id='rimg11101'>
              
            </div>
            <div>
            {isSecondDivisionVisible11 && (
        <div id="msg101">
          Gmail - Haelymarsh.@Vags.com
        </div>
      )}
            <button type="button"id="det101" onClick={hcl11101}>-HAELY MARSH</button>
            </div>
          </div>
          <div class="rsidecont101">
            <div id='rimg12101'></div>
            <div>
            {isSecondDivisionVisible12 && (
        <div id="msg101">
          Gmail - Timppeter@Vags.com
        </div>
      )}
            <button type="button"id="det101" onClick={hcl12101}>-TIM PETER</button>
            </div>
          </div>
          <div class="rsidecont101">
            <div id='rimg13101'></div>
            <div>
            {isSecondDivisionVisible13 && (
        <div id="msg101">
          Gmail - ZENCoop@Vags.com
        </div>
      )}
            <button type="button"id="det101"onClick={hcl13101}>-ZEN COOPER</button>
            </div>
          </div>
          <div class="rsidecont101">
            <div id='rimg14101'></div>
            <div>
            {isSecondDivisionVisible14 && (
        <div id="msg101">
          Gmail - ZEIZUI@Vags.com
        </div>
      )}
            <button type="button"id="det101" onClick={hcl14101}>-ZEIDA ZUIEG</button>
            </div>
          </div>
      </div>
      <div id="msg101">
        <Link to='/support'><button type="button" id="git101">GET IN TOUCH</button></Link>

      </div>
      <div id="dr101">
      <h1 style={{marginLeft:'95px',fontFamily:'Courier New',fontSize:'40px'}}>Reach a global network of <br></br>collectors</h1>
        <h1 style={{marginLeft:'495px',fontSize:'60px'}}>1B+</h1>
        <h1 style={{marginLeft:'355px',fontSize:'30px'}}>User's world wide</h1>
        <h1 style={{marginLeft:'406px',fontSize:'60px'}}>100M+</h1>
        <h1 style={{marginLeft:'340px',fontSize:'30px'}}>Seller's world wide</h1>
        <h1 style={{marginLeft:'460px',fontSize:'60px'}}>190+</h1>
        <h1 style={{marginLeft:'245px',fontSize:'30px'}}>Countries in our Network</h1>
      </div>
    </div>
    </div>
  )
}

export default Selerf