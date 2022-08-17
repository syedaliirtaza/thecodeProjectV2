import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Conversionhex.css";


function ConversionHex() {
  useEffect(()=>{
    AOS.init({duration: 2000});
  },[])
  return (
    <div className='conversionHexContainer'>
    <h1 data-aos="fade-up"
     data-aos-duration="3000" className='conversionHexContainerHeading '>Binary System</h1>
    <div className='conversionHexContainerPara'>
    <p data-aos="fade-up"
     data-aos-duration="3000" className='para '>As a base-16 numeral system, hexadecimal uses 16 symbols. These are 0 to 9 decimal digits and the first six letters of the English alphabet, A through F. The letters are used because of the need to represent the overflowing values in one single symbol. Each hex digit represents four binary digits; therefore, hex is a language to write binary in an abbreviated form. In hex, bytes values ranging from 00 to FF, can be used to represent all alphanumeric digits through the standard ASCII conversion. Each hex digit represents four binary digits.</p>
    </div>
    <div className='conversionHexContainerDialouge'>
    <p data-aos="fade-up"
     data-aos-duration="3000" className=' dialouge'>Step 1: Write down the binary number and group the digits in sets of four.<br />
      Step 2: Write 8, 4, 2 and 1 below each group. These are the weights of the positions.<br />
      Step 3: Each group of four in binary will give you one digit in hexadecimal.<br />
      Multiply the 8, 4, 2 and 1s by the respective digit which is either a 0 or 1.<br />
      Step 4: Add the products within each set of four. Write the sums below the groups they belong to.<br />
      Step 5: The digits you get from the sums in each group will give you the hexadecimal number, from left to right.<br />
      Step 6: Use the corresponding hexadecimal numbers and letters from the chart below to decode your message.
    </p>
    </div>
<div className='hexTable'>
    <div data-aos="fade-up"
     data-aos-duration="3000" className='tableWidth'>
      <table class="table-auto">
        <thead>
          <tr>
            <th>HEXADECIMAL</th>
            <th>BINARY</th>
            <th>ASCII</th>
          </tr>
        </thead>
    <tbody>
              <tr>
                <td className='text-center'>61</td>
                <td > 01100001</td>
                <td className='text-center'>a</td>
              </tr>
              <tr >
                <td className='text-center'>62</td>
                <td > 01100010</td>
                <td className='text-center'>b</td>
              </tr>
              <tr >
                <td className='text-center'>63</td>
                <td > 01100011</td>
                <td className='text-center'>c</td>
              </tr>
              <tr >
                <td className='text-center'>64
                </td>
                <td > 01100100</td>
                <td className='text-center'>d</td>
              </tr>
              <tr >
                <td className='text-center'>65</td>
                <td > 01100101</td>
                <td className='text-center'>e</td>
              </tr>
              <tr >
                <td className='text-center'>66</td>
                <td > 01100110</td>
                <td className='text-center'>f</td>
              </tr>
              <tr >
                <td className='text-center'>67</td>
                <td > 01100111</td>
                <td className='text-center'>g</td>
              </tr>
              <tr >
                <td className='text-center'>68</td>
                <td > 01101000</td>
                <td className='text-center'>h</td>
              </tr>
              <tr >
                <td className='text-center'>69</td>
                <td > 01101001</td>
                <td className='text-center'>i</td>
              </tr>
              <tr >
                <td className='text-center'>6A</td>
                <td > 01101010</td>
                <td className='text-center'>j</td>
              </tr>
              <tr >
                <td className='text-center'>6B</td>
                <td > 01101011</td>
                <td className='text-center'>k</td>
              </tr>
              <tr >
                <td className='text-center'>6C</td>
                <td > 01101100</td>
                <td className='text-center'>l</td>
              </tr>
              <tr >
                <td className='text-center'>6D</td>
                <td > 01101101</td>
                <td className='text-center'>m</td>
              </tr>
              <tr >
                <td className='text-center'>6E</td>
                <td > 01101110</td>
                <td className='text-center'>n</td>
              </tr>
              <tr >
                <td className='text-center'>6F</td>
                <td > 01101111</td>
                <td className='text-center'>o</td>
              </tr>
              <tr >
                <td className='text-center'>70</td>
                <td > 01110000</td>
                <td className='text-center'>p</td>
              </tr>
              <tr >
                <td className='text-center'>71
                </td>
                <td > 01110001</td>
                <td className='text-center'>q</td>
              </tr>
              <tr >
                <td className='text-center'>72</td>
                <td > 01110010</td>
                <td className='text-center'>r</td>
              </tr>
              <tr >
                <td className='text-center'>73
                </td>
                <td > 01110011</td>
                <td className='text-center'>s</td>
              </tr>
              <tr >
                <td className='text-center'>74</td>
                <td > 01110100</td>
                <td className='text-center'>t</td>
              </tr>
              <tr >
                <td className='text-center'>75</td>
                <td > 01110101</td>
                <td className='text-center'>u</td>
              </tr>
              <tr >
                <td className='text-center'>76</td>
                <td > 01110110</td>
                <td className='text-center'>v</td>
              </tr>
              <tr >
                <td className='text-center'>77</td>
                <td > 01110111</td>
                <td className='text-center'>w</td>
              </tr>
              <tr >
                <td className='text-center'>78</td>
                <td > 01111000</td>
                <td className='text-center'>x</td>
              </tr>
              <tr >
                <td className='text-center'>79</td>
                <td > 01111001</td>
                <td className='text-center'>y</td>
              </tr>
              <tr >
                <td className='text-center'>7A</td>
                <td > 01111010</td>
                <td className='text-center'>z</td>
              </tr>
        </tbody>
      </table>
</div>
    {/* table 2 */}
    <div data-aos="fade-up"
     data-aos-duration="3000" className='tableWidth'>
      <table class="table-auto">
      <thead>
            <tr>
              <th>HEXADECIMAL</th>
              <th>BINARY</th>
              <th>ASCII</th>
              </tr>
          </thead>
          <tbody>
          <tr>
                <td className='text-center'>41</td>
                <td> 01000001</td>
                <td className='text-center'>A</td>
              </tr>
              <tr>
                <td className='text-center'>42</td>
                <td> 01000010</td>
                <td className='text-center'>B</td>
              </tr>
              <tr>
                <td className='text-center'>43</td>
                <td>01000011</td>
                <td className='text-center'>C</td>
              </tr>
              <tr>
                <td className='text-center'>44
                </td>
                <td>01000100</td>
                <td className='text-center'>D</td>
              </tr>
              <tr>
                <td className='text-center'>45</td>
                <td>01000101</td>
                <td className='text-center'>E</td>
              </tr>
              <tr>
                <td className='text-center'>46</td>
                <td>01000110</td>
                <td className='text-center'>F</td>
              </tr>
              <tr>
                <td className='text-center'>47</td>
                <td>01000111</td>
                <td className='text-center'>G</td>
              </tr>
              <tr>
                <td className='text-center'>48</td>
                <td>01001000</td>
                <td className='text-center'>H</td>
              </tr>
              <tr>
                <td className='text-center'>49</td>
                <td>01001001</td>
                <td className='text-center'>I</td>
              </tr>
              <tr >
                <td className='text-center'>4A</td>
                <td >01001010</td>
                <td className='text-center'>J</td>
              </tr>
              <tr >
                <td className='text-center'>4B</td>
                <td >01001011</td>
                <td className='text-center'>K</td>
              </tr>
              <tr >
                <td className='text-center'>4C</td>
                <td >01001100</td>
                <td className='text-center'>L</td>
              </tr>
              <tr >
                <td className='text-center'>4D</td>
                <td >01001101</td>
                <td className='text-center'>M</td>
              </tr>
              <tr >
                <td className='text-center'>4E</td>
                <td >01001110</td>
                <td className='text-center'>N</td>
              </tr>
              <tr >
                <td className='text-center'>4F</td>
                <td > 01001111</td>
                <td className='text-center'>O</td>
              </tr>
              <tr >
                <td className='text-center'>50</td>
                <td > 01010000</td>
                <td className='text-center'>P</td>
              </tr>
              <tr>
                <td className='text-center'>51
                </td>
                <td > 01010001</td>
                <td className='text-center'>Q</td>
              </tr>
              <tr >
                <td className='text-center'>52</td>
                <td > 01010010</td>
                <td className='text-center'>R</td>
              </tr>
              <tr >
                <td className='text-center'>53
                </td>
                <td > 01010011</td>
                <td className='text-center'>S</td>
              </tr>
              <tr >
                <td className='text-center'>54</td>
                <td > 01010100</td>
                <td className='text-center'>T</td>
              </tr>
              <tr >
                <td className='text-center'>55</td>
                <td > 01010101</td>
                <td className='text-center'>U</td>
              </tr>
              <tr >
                <td className='text-center'>56</td>
                <td > 01010110</td>
                <td className='text-center'>V</td>
              </tr>
              <tr >
                <td className='text-center'>57</td>
                <td > 01010111</td>
                <td className='text-center'>W</td>
              </tr>
              <tr >
                <td className='text-center'>58</td>
                <td > 01011000</td>
                <td className='text-center'>X</td>
              </tr>
              <tr>
                <td className='text-center'>59</td>
                <td > 01011001</td>
                <td className='text-center'>Y</td>
              </tr>
              <tr >
                <td className='text-center'>5A</td>
                <td > 01011010</td>
                <td className='text-center'>Z</td>
              </tr>
        </tbody>
      </table>
    </div>
</div>
<div className='hexTableTwo'>
        {/* table 3 */}
    <div data-aos="fade-up"
     data-aos-duration="3000" className='tableWidth'>
      <table class="table-auto">
          <tbody>
          <tr >
                <td className='text-center'>6F</td>
                <td > 01101111</td>
                <td className='text-center'>0</td>
              </tr>
              <tr >
                <td className='text-center'>70</td>
                <td > 01110000</td>
                <td className='text-center'>1</td>
              </tr>
              <tr >
                <td className='text-center'>71
                </td>
                <td > 01110001</td>
                <td className='text-center'>2</td>
              </tr>
              <tr >
                <td className='text-center'>72</td>
                <td > 01110010</td>
                <td className='text-center'>3</td>
              </tr>
              <tr >
                <td className='text-center'>73
                </td>
                <td > 01110011</td>
                <td className='text-center'>4</td>
              </tr>
              <tr >
                <td className='text-center'>74</td>
                <td > 01110100</td>
                <td className='text-center'>5</td>
              </tr>
              <tr >
                <td className='text-center'>75</td>
                <td > 01110101</td>
                <td className='text-center'>6</td>
              </tr>
              <tr >
                <td className='text-center'>76</td>
                <td > 01110110</td>
                <td className='text-center'>7</td>
              </tr>
              <tr >
                <td className='text-center'>77</td>
                <td > 01110111</td>
                <td className='text-center'>8</td>
              </tr>
              <tr >
                <td className='text-center'>78</td>
                <td > 01111000</td>
                <td className='text-center'>9</td>
              </tr>
        </tbody>
      </table>
    </div>
    {/* table 4 */}
    <div data-aos="fade-up"
     data-aos-duration="3000" className='tableWidth'>
      <table class="table-auto">
          <tbody>
          <tr >
                <td >20</td>
                <td> 00100000</td>
                <td className='text-center'>SPACE</td>
              </tr>
            <tr >
                <td >21</td>
                <td> 00100001</td>
                <td className='text-center'>!</td>
              </tr>
              <tr >
                <td >2D</td>
                <td > 00101101</td>
                <td >-</td>
              </tr>
              <tr >
                <td >2C</td>
                <td > 00100111</td>
                <td >'</td>
              </tr>
              <tr >
                <td >3F</td>
                <td > 00111111</td>
                <td >?</td>
              </tr>
              <tr >
                <td >2E</td>
                <td > 00101110</td>
                <td >.</td>
              </tr>
              <tr >
                <td >2C</td>
                <td > 00101100</td>
                <td >,</td>
              </tr>
              <tr >
                <td >3D</td>
                <td > 00111101</td>
                <td >=</td>
              </tr>
              <tr >
                <td >3A</td>
                <td > 00111010</td>
                <td >:</td>
              </tr>
              <tr >
                <td >23</td>
                <td > 00100011</td>
                <td >#</td>
              </tr>
              <tr >
                <td >2A</td>
                <td > 00101010</td>
                <td >*</td>
              </tr>
              <tr >
                <td >28</td>
                <td > 00101000</td>
                <td >(</td>
              </tr>
              <tr >
                <td >29</td>
                <td > 00101001</td>
                <td >)</td>
              </tr>
              <tr >
                <td >2F</td>
                <td > 00101111</td>
                <td >/</td>
              </tr>
        </tbody>
      </table>
    </div>
</div>
</div>
  )
}

export default ConversionHex