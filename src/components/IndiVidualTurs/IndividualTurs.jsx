import React, { useState } from "react";

function IndividualTurs() {
  // Add new state for form
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    citizenship: "",
    email: "",
    phone: "",
    arrivingFrom: "",
    startDate: "",
    endDate: "",
    accommodationType: "",
    numberOfTravelers: "",
    comments: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log the form data
    console.log("Form submitted with data:", formData);

    // Here you would typically send the data to your backend
    // For now, we'll just log it and reset the form

    // Reset form
    setFormData({
      title: "",
      firstName: "",
      lastName: "",
      citizenship: "",
      email: "",
      phone: "",
      arrivingFrom: "",
      startDate: "",
      endDate: "",
      accommodationType: "",
      numberOfTravelers: "",
      comments: "",
    });

    // Show success message
    alert("Tour request submitted successfully!");
  };
  return (
    <div>
      {/* Tour Request Form Section */}
      <div className="mt-12 w-full max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-sm">
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Tour Request
          </h2>

          <div className="space-y-8">
            {/* Contact Details */}
            <div className="w-full">
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Contact Details
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                We use this information solely for the purpose of corresponding
                regarding your travel.
              </p>

              <div className="w-full space-y-4">
                <div className="w-full">
                  <select
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full border rounded-md p-3 bg-white text-gray-700"
                  >
                    <option value="">Select Title</option>
                    <option value="Mr">Mr.</option>
                    <option value="Mrs">Mrs.</option>
                    <option value="Ms">Ms.</option>
                  </select>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className="w-full border rounded-md p-3"
                  />

                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className="w-full border rounded-md p-3"
                  />
                </div>

                <div className="w-full">
                  <select
                    name="citizenship"
                    value={formData.citizenship}
                    onChange={handleInputChange}
                    className="w-full border rounded-md p-3 bg-white text-gray-700"
                  >
                    <option value="">Select Citizenship</option>

                    {/* Asia */}
                    <optgroup label="Asia">
                      <option value="AF">Afghanistan</option>
                      <option value="AM">Armenia</option>
                      <option value="AZ">Azerbaijan</option>
                      <option value="BH">Bahrain</option>
                      <option value="BD">Bangladesh</option>
                      <option value="BT">Bhutan</option>
                      <option value="BN">Brunei</option>
                      <option value="KH">Cambodia</option>
                      <option value="CN">China</option>
                      <option value="CY">Cyprus</option>
                      <option value="GE">Georgia</option>
                      <option value="IN">India</option>
                      <option value="ID">Indonesia</option>
                      <option value="IR">Iran</option>
                      <option value="IQ">Iraq</option>
                      <option value="IL">Israel</option>
                      <option value="JP">Japan</option>
                      <option value="JO">Jordan</option>
                      <option value="KZ">Kazakhstan</option>
                      <option value="KW">Kuwait</option>
                      <option value="KG">Kyrgyzstan</option>
                      <option value="LA">Laos</option>
                      <option value="LB">Lebanon</option>
                      <option value="MY">Malaysia</option>
                      <option value="MV">Maldives</option>
                      <option value="MN">Mongolia</option>
                      <option value="MM">Myanmar (Burma)</option>
                      <option value="NP">Nepal</option>
                      <option value="KP">North Korea</option>
                      <option value="OM">Oman</option>
                      <option value="PK">Pakistan</option>
                      <option value="PS">Palestine</option>
                      <option value="PH">Philippines</option>
                      <option value="QA">Qatar</option>
                      <option value="SA">Saudi Arabia</option>
                      <option value="SG">Singapore</option>
                      <option value="KR">South Korea</option>
                      <option value="LK">Sri Lanka</option>
                      <option value="SY">Syria</option>
                      <option value="TW">Taiwan</option>
                      <option value="TJ">Tajikistan</option>
                      <option value="TH">Thailand</option>
                      <option value="TL">Timor-Leste</option>
                      <option value="TR">Turkey</option>
                      <option value="TM">Turkmenistan</option>
                      <option value="AE">United Arab Emirates</option>
                      <option value="UZ">Uzbekistan</option>
                      <option value="VN">Vietnam</option>
                      <option value="YE">Yemen</option>
                    </optgroup>

                    {/* Europe */}
                    <optgroup label="Europe">
                      <option value="AL">Albania</option>
                      <option value="AD">Andorra</option>
                      <option value="AT">Austria</option>
                      <option value="BY">Belarus</option>
                      <option value="BE">Belgium</option>
                      <option value="BA">Bosnia and Herzegovina</option>
                      <option value="BG">Bulgaria</option>
                      <option value="HR">Croatia</option>
                      <option value="CZ">Czech Republic</option>
                      <option value="DK">Denmark</option>
                      <option value="EE">Estonia</option>
                      <option value="FI">Finland</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                      <option value="GR">Greece</option>
                      <option value="HU">Hungary</option>
                      <option value="IS">Iceland</option>
                      <option value="IE">Ireland</option>
                      <option value="IT">Italy</option>
                      <option value="LV">Latvia</option>
                      <option value="LI">Liechtenstein</option>
                      <option value="LT">Lithuania</option>
                      <option value="LU">Luxembourg</option>
                      <option value="MT">Malta</option>
                      <option value="MD">Moldova</option>
                      <option value="MC">Monaco</option>
                      <option value="ME">Montenegro</option>
                      <option value="NL">Netherlands</option>
                      <option value="MK">North Macedonia</option>
                      <option value="NO">Norway</option>
                      <option value="PL">Poland</option>
                      <option value="PT">Portugal</option>
                      <option value="RO">Romania</option>
                      <option value="RU">Russia</option>
                      <option value="SM">San Marino</option>
                      <option value="RS">Serbia</option>
                      <option value="SK">Slovakia</option>
                      <option value="SI">Slovenia</option>
                      <option value="ES">Spain</option>
                      <option value="SE">Sweden</option>
                      <option value="CH">Switzerland</option>
                      <option value="UA">Ukraine</option>
                      <option value="GB">United Kingdom</option>
                      <option value="VA">Vatican City</option>
                    </optgroup>

                    {/* North America */}
                    <optgroup label="North America">
                      <option value="AG">Antigua and Barbuda</option>
                      <option value="BS">Bahamas</option>
                      <option value="BB">Barbados</option>
                      <option value="BZ">Belize</option>
                      <option value="CA">Canada</option>
                      <option value="CR">Costa Rica</option>
                      <option value="CU">Cuba</option>
                      <option value="DM">Dominica</option>
                      <option value="DO">Dominican Republic</option>
                      <option value="SV">El Salvador</option>
                      <option value="GD">Grenada</option>
                      <option value="GT">Guatemala</option>
                      <option value="HT">Haiti</option>
                      <option value="HN">Honduras</option>
                      <option value="JM">Jamaica</option>
                      <option value="MX">Mexico</option>
                      <option value="NI">Nicaragua</option>
                      <option value="PA">Panama</option>
                      <option value="KN">Saint Kitts and Nevis</option>
                      <option value="LC">Saint Lucia</option>
                      <option value="VC">
                        Saint Vincent and the Grenadines
                      </option>
                      <option value="TT">Trinidad and Tobago</option>
                      <option value="US">United States</option>
                    </optgroup>

                    {/* South America */}
                    <optgroup label="South America">
                      <option value="AR">Argentina</option>
                      <option value="BO">Bolivia</option>
                      <option value="BR">Brazil</option>
                      <option value="CL">Chile</option>
                      <option value="CO">Colombia</option>
                      <option value="EC">Ecuador</option>
                      <option value="GY">Guyana</option>
                      <option value="PY">Paraguay</option>
                      <option value="PE">Peru</option>
                      <option value="SR">Suriname</option>
                      <option value="UY">Uruguay</option>
                      <option value="VE">Venezuela</option>
                    </optgroup>

                    {/* Africa */}
                    <optgroup label="Africa">
                      <option value="DZ">Algeria</option>
                      <option value="AO">Angola</option>
                      <option value="BJ">Benin</option>
                      <option value="BW">Botswana</option>
                      <option value="BF">Burkina Faso</option>
                      <option value="BI">Burundi</option>
                      <option value="CM">Cameroon</option>
                      <option value="CV">Cape Verde</option>
                      <option value="CF">Central African Republic</option>
                      <option value="TD">Chad</option>
                      <option value="KM">Comoros</option>
                      <option value="CG">Congo</option>
                      <option value="CD">Congo, Democratic Republic</option>
                      <option value="DJ">Djibouti</option>
                      <option value="EG">Egypt</option>
                      <option value="GQ">Equatorial Guinea</option>
                      <option value="ER">Eritrea</option>
                      <option value="ET">Ethiopia</option>
                      <option value="GA">Gabon</option>
                      <option value="GM">Gambia</option>
                      <option value="GH">Ghana</option>
                      <option value="GN">Guinea</option>
                      <option value="GW">Guinea-Bissau</option>
                      <option value="CI">Ivory Coast</option>
                      <option value="KE">Kenya</option>
                      <option value="LS">Lesotho</option>
                      <option value="LR">Liberia</option>
                      <option value="LY">Libya</option>
                      <option value="MG">Madagascar</option>
                      <option value="MW">Malawi</option>
                      <option value="ML">Mali</option>
                      <option value="MR">Mauritania</option>
                      <option value="MU">Mauritius</option>
                      <option value="MA">Morocco</option>
                      <option value="MZ">Mozambique</option>
                      <option value="NA">Namibia</option>
                      <option value="NE">Niger</option>
                      <option value="NG">Nigeria</option>
                      <option value="RW">Rwanda</option>
                      <option value="ST">São Tomé and Príncipe</option>
                      <option value="SN">Senegal</option>
                      <option value="SC">Seychelles</option>
                      <option value="SL">Sierra Leone</option>
                      <option value="SO">Somalia</option>
                      <option value="ZA">South Africa</option>
                      <option value="SS">South Sudan</option>
                      <option value="SD">Sudan</option>
                      <option value="SZ">Swaziland</option>
                      <option value="TZ">Tanzania</option>
                      <option value="TG">Togo</option>
                      <option value="TN">Tunisia</option>
                      <option value="UG">Uganda</option>
                      <option value="ZM">Zambia</option>
                      <option value="ZW">Zimbabwe</option>
                    </optgroup>

                    {/* Oceania */}
                    <optgroup label="Oceania">
                      <option value="AU">Australia</option>
                      <option value="FJ">Fiji</option>
                      <option value="KI">Kiribati</option>
                      <option value="MH">Marshall Islands</option>
                      <option value="FM">Micronesia</option>
                      <option value="NR">Nauru</option>
                      <option value="NZ">New Zealand</option>
                      <option value="PW">Palau</option>
                      <option value="PG">Papua New Guinea</option>
                      <option value="WS">Samoa</option>
                      <option value="SB">Solomon Islands</option>
                      <option value="TO">Tonga</option>
                      <option value="TV">Tuvalu</option>
                      <option value="VU">Vanuatu</option>
                    </optgroup>

                    {/* Caribbean */}
                    <optgroup label="Caribbean">
                      <option value="AI">Anguilla</option>
                      <option value="AW">Aruba</option>
                      <option value="BM">Bermuda</option>
                      <option value="VG">British Virgin Islands</option>
                      <option value="KY">Cayman Islands</option>
                      <option value="CW">Curaçao</option>
                      <option value="GP">Guadeloupe</option>
                      <option value="MQ">Martinique</option>
                      <option value="MS">Montserrat</option>
                      <option value="PR">Puerto Rico</option>
                      <option value="BL">Saint Barthélemy</option>
                      <option value="MF">Saint Martin</option>
                      <option value="VI">U.S. Virgin Islands</option>
                    </optgroup>

                    {/* Dependencies and Other Territories */}
                    <optgroup label="Dependencies and Other Territories">
                      <option value="AS">American Samoa</option>
                      <option value="AQ">Antarctica</option>
                      <option value="BV">Bouvet Island</option>
                      <option value="IO">British Indian Ocean Territory</option>
                      <option value="CX">Christmas Island</option>
                      <option value="CC">Cocos (Keeling) Islands</option>
                      <option value="CK">Cook Islands</option>
                      <option value="FK">Falkland Islands</option>
                      <option value="FO">Faroe Islands</option>
                      <option value="GF">French Guiana</option>
                      <option value="PF">French Polynesia</option>
                      <option value="TF">French Southern Territories</option>
                      <option value="GI">Gibraltar</option>
                      <option value="GL">Greenland</option>
                      <option value="GU">Guam</option>
                      <option value="HM">
                        Heard Island and McDonald Islands
                      </option>
                      <option value="HK">Hong Kong</option>
                      <option value="MO">Macao</option>
                      <option value="MP">Northern Mariana Islands</option>
                      <option value="NU">Niue</option>
                      <option value="NF">Norfolk Island</option>
                      <option value="NC">New Caledonia</option>
                      <option value="PN">Pitcairn</option>
                      <option value="RE">Réunion</option>
                      <option value="SH">Saint Helena</option>
                      <option value="PM">Saint Pierre and Miquelon</option>
                      <option value="GS">
                        South Georgia and the South Sandwich Islands
                      </option>
                      <option value="SJ">Svalbard and Jan Mayen</option>
                      <option value="TK">Tokelau</option>
                      <option value="TC">Turks and Caicos Islands</option>
                      <option value="UM">
                        United States Minor Outlying Islands
                      </option>
                      <option value="WF">Wallis and Futuna</option>
                      <option value="EH">Western Sahara</option>
                    </optgroup>
                  </select>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="E-mail"
                    className="w-full border rounded-md p-3"
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone (+code)"
                    className="w-full border rounded-md p-3"
                  />
                </div>

                <div className="w-full">
                  <input
                    type="text"
                    name="arrivingFrom"
                    value={formData.arrivingFrom}
                    onChange={handleInputChange}
                    placeholder="Arriving from"
                    className="w-full border rounded-md p-3"
                  />
                </div>
              </div>
            </div>

            {/* Travel Info */}
            <div className="w-full">
              <h3 className="text-lg font-medium text-gray-700 mb-4">
                Travel Info
              </h3>

              <div className="w-full space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    className="w-full border rounded-md p-3"
                  />

                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleInputChange}
                    className="w-full border rounded-md p-3"
                  />
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  <select
                    name="accommodationType"
                    value={formData.accommodationType}
                    onChange={handleInputChange}
                    className="w-full border rounded-md p-3 bg-white text-gray-700"
                  >
                    <option value="">Accommodation Type</option>
                    <option value="economy">Economy</option>
                    <option value="comfort">Comfort</option>
                    <option value="deluxe">Deluxe</option>
                    <option value="all">All options</option>
                  </select>

                  <select
                    name="numberOfTravelers"
                    value={formData.numberOfTravelers}
                    onChange={handleInputChange}
                    className="w-full border rounded-md p-3 bg-white text-gray-700"
                  >
                    <option value="">Number of Travelers</option>
                    <option value="1">1 person</option>
                    <option value="2">2 people</option>
                    <option value="3">3 people</option>
                    <option value="4">4 people</option>
                    <option value="5">5 people</option>
                    <option value="6">6+ people</option>
                    <option value="group">Group tour</option>
                  </select>
                </div>

                <div className="w-full">
                  <textarea
                    name="comments"
                    value={formData.comments}
                    onChange={handleInputChange}
                    placeholder="Comments and additional information"
                    className="w-full border rounded-md p-3 h-32 resize-none"
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="w-full">
              <button
                type="submit"
                className="w-full md:w-auto bg-green-500 text-white px-8 py-3 rounded-md hover:bg-green-600 transition-colors"
              >
                Send request
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default IndividualTurs;
