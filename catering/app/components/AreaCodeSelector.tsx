"use client";

import { useState } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Combobox } from "@headlessui/react";
import { useUser } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";
const postCodes = [
  { code: "205 - Birmingham, Alabaster, Bessemer (Alabama)" },
  { code: "251 - Mobile, Prichard (Alabama)" },
  { code: "256 - Huntsville, Anniston, Decatur (Alabama)" },
  { code: "334 - Montgomery, Auburn, Dothan (Alabama)" },
  { code: "659 - Birmingham (Alabama)" },
  { code: "938 - Huntsville (Alabama)" },
  { code: "907 - Anchorage, College, Fairbanks (Alaska)" },
  { code: "368 - Calgary (Alberta)" },
  { code: "403 - Calgary (Alberta)" },
  { code: "587 - Calgary (Alberta)" },
  { code: "780 - Edmonton (Alberta)" },
  { code: "825 - Calgary (Alberta)" },
  { code: "684 - Pago Pago, Pago (American Samoa)" },
  { code: "480 - Mesa, Apache Junction, Chandler (Arizona)" },
  { code: "520 - Tucson, Casa Adobes, Casa Grande (Arizona)" },
  { code: "602 - Phoenix (Arizona)" },
  { code: "623 - Phoenix, Avondale, Glendale (Arizona)" },
  { code: "928 - Yuma, Bullhead City, Flagstaff (Arizona)" },
  { code: "479 - Fort Smith, Fayetteville, Rogers (Arkansas)" },
  { code: "501 - Little Rock, Benton, Conway (Arkansas)" },
  { code: "870 - Jonesboro, El Dorado, Paragould (Arkansas)" },
  { code: "236 - Vancouver (British Columbia)" },
  { code: "250 - Kelowna (British Columbia)" },
  { code: "604 - Vancouver (British Columbia)" },
  { code: "672 - Vancouver (British Columbia)" },
  { code: "778 - Vancouver (British Columbia)" },
  { code: "209 - Stockton, Atwater, Ceres (California)" },
  { code: "213 - Los Angeles (California)" },
  { code: "279 - Sacramento, Arden-arcade, Carmichael (California)" },
  { code: "310 - Los Angeles, Beverly Hills, Carson (California)" },
  { code: "323 - Los Angeles, Bell, Bell Gardens (California)" },
  { code: "341 - Oakland (California)" },
  { code: "350 - Stockton (California)" },
  { code: "408 - San Jose, Campbell, Gilroy (California)" },
  { code: "415 - San Francisco, Novato, San Anselmo (California)" },
  { code: "424 - Los Angeles, Beverly Hills, Carson (California)" },
  { code: "442 - Oceanside, Apple Valley, Barstow (California)" },
  { code: "510 - Oakland, Alameda, Berkeley (California)" },
  { code: "530 - Redding, Chico, Davis (California)" },
  { code: "559 - Fresno, Clovis, Hanford (California)" },
  { code: "562 - Long Beach, Bellflower, Cerritos (California)" },
  { code: "619 - San Diego, Chula Vista, Coronado (California)" },
  { code: "626 - Pasadena, Alhambra, Altadena (California)" },
  { code: "628 - San Francisco, Novato, San Anselmo (California)" },
  { code: "650 - San Mateo, Belmont, Burlingame (California)" },
  { code: "657 - Anaheim, Brea, Buena Park (California)" },
  { code: "661 - Bakersfield, Delano, Lancaster (California)" },
  { code: "669 - San Jose, Campbell, Gilroy (California)" },
  { code: "707 - Santa Rosa, Benicia, Eureka (California)" },
  { code: "714 - Anaheim, Brea, Buena Park (California)" },
  { code: "747 - Los Angeles, Agoura Hills, Burbank (California)" },
  { code: "760 - Oceanside, Apple Valley, Barstow (California)" },
  { code: "805 - Oxnard, Atascadero, Camarillo (California)" },
  { code: "818 - Los Angeles, Agoura Hills, Burbank (California)" },
  { code: "820 - Oxnard (California)" },
  { code: "831 - Salinas, Hollister, Marina (California)" },
  { code: "840 - San Bernardino (California)" },
  { code: "858 - San Diego, Poway (California)" },
  { code: "909 - San Bernardino, Chino, Chino Hills (California)" },
  { code: "916 - Sacramento, Arden-arcade, Carmichael (California)" },
  { code: "925 - Concord, Antioch, Bay Point (California)" },
  { code: "949 - Irvine, Aliso Viejo, Costa Mesa (California)" },
  { code: "951 - Riverside, Banning, Corona (California)" },
  { code: "303 - Denver, Arvada, Aurora (Colorado)" },
  { code: "719 - Colorado Springs, Pueblo, Security-widefield (Colorado)" },
  { code: "720 - Denver, Arvada, Aurora (Colorado)" },
  { code: "970 - Fort Collins, Grand Junction, Greeley (Colorado)" },
  { code: "983 - Denver (Colorado)" },
  { code: "203 - Bridgeport, Danbury, East Haven (Connecticut)" },
  { code: "475 - Bridgeport, Danbury, East Haven (Connecticut)" },
  { code: "860 - Hartford, Bristol, Central Manchester (Connecticut)" },
  { code: "959 - Hartford, Bristol, Central Manchester (Connecticut)" },
  { code: "302 - Wilmington, Dover, Newark (Delaware)" },
  { code: "239 - Cape Coral, Bonita Springs, Fort Myers (Florida)" },
  { code: "305 - Miami, Aventura, Carol City (Florida)" },
  { code: "321 - Orlando, Altamonte Springs, Apopka (Florida)" },
  { code: "352 - Gainesville, Oakland Park, Ocala (Florida)" },
  { code: "386 - Palm Coast, Daytona Beach, De Land (Florida)" },
  { code: "407 - Orlando, Altamonte Springs, Apopka (Florida)" },
  { code: "448 - Tallahassee (Florida)" },
  { code: "561 - West Palm Beach, Boca Del Mar, Boca Raton (Florida)" },
  { code: "656 - Tampa (Florida)" },
  { code: "689 - Orlando (Florida)" },
  { code: "727 - St. Petersburg, Bayonet Point, Clearwater (Florida)" },
  { code: "754 - Fort Lauderdale, Coconut Creek, Cooper City (Florida)" },
  { code: "772 - Port St. Lucie, Fort Pierce, Palm City (Florida)" },
  { code: "786 - Miami, Aventura, Carol City (Florida)" },
  { code: "813 - Tampa, Brandon, Citrus Park (Florida)" },
  { code: "850 - Tallahassee, Bellview, Brent (Florida)" },
  { code: "863 - Lakeland, Winter Haven (Florida)" },
  { code: "904 - Jacksonville, Jacksonville Beach, Lakeside (Florida)" },
  { code: "941 - North Port, Bradenton, Port Charlotte (Florida)" },
  { code: "954 - Fort Lauderdale, Coconut Creek, Cooper City (Florida)" },
  { code: "229 - Albany, Valdosta (Georgia)" },
  { code: "404 - Atlanta, Candler-mcafee, College Park (Georgia)" },
  { code: "470 - Atlanta (Georgia)" },
  { code: "478 - Macon, Warner Robins (Georgia)" },
  { code: "678 - Atlanta, Alpharetta, Candler-mcafee (Georgia)" },
  { code: "706 - Augusta, Athens, Columbus (Georgia)" },
  { code: "762 - Augusta, Athens, Columbus (Georgia)" },
  { code: "770 - Roswell, Alpharetta, Atlanta (Georgia)" },
  { code: "912 - Savannah, Hinesville, Statesboro (Georgia)" },
  { code: "943 - Atlanta (Georgia)" },
  { code: "671 - Dededo, Hagatna (Guam)" },
  { code: "808 - Urban Honolulu, Hilo, Honolulu (Hawaii)" },
  { code: "208 - Boise City, Caldwell, Coeur D'alene (Idaho)" },
  { code: "986 - Boise City, Caldwell, Coeur D'alene (Idaho)" },
  { code: "217 - Springfield, Champaign, Charleston (Illinois)" },
  { code: "224 - Elgin, Algonquin, Arlington Heights (Illinois)" },
  { code: "309 - Peoria, Bloomington, East Moline (Illinois)" },
  { code: "312 - Chicago (Illinois)" },
  { code: "331 - Aurora, Addison, Bartlett (Illinois)" },
  { code: "447 - Springfield (Illinois)" },
  { code: "464 - Cicero (Illinois)" },
  { code: "618 - Belleville, Alton, Carbondale (Illinois)" },
  { code: "630 - Aurora, Addison, Bartlett (Illinois)" },
  { code: "708 - Cicero, Bellwood, Berwyn (Illinois)" },
  { code: "773 - Chicago (Illinois)" },
  { code: "779 - Rockford, Belvidere, Crystal Lake (Illinois)" },
  { code: "815 - Rockford, Belvidere, Crystal Lake (Illinois)" },
  { code: "847 - Elgin, Algonquin, Arlington Heights (Illinois)" },
  { code: "872 - Chicago (Illinois)" },
  { code: "219 - Hammond, East Chicago, Gary (Indiana)" },
  { code: "260 - Fort Wayne (Indiana)" },
  { code: "317 - Indianapolis, Carmel, Fishers (Indiana)" },
  { code: "463 - Indianapolis, Carmel, Fishers (Indiana)" },
  { code: "574 - South Bend, Elkhart, Goshen (Indiana)" },
  { code: "765 - Muncie, Anderson, Kokomo (Indiana)" },
  { code: "812 - Evansville, Bloomington, Clarksville (Indiana)" },
  { code: "930 - Evansville, Bloomington, Clarksville (Indiana)" },
  { code: "319 - Cedar Rapids, Burlington, Cedar Falls (Iowa)" },
  { code: "515 - Des Moines, Ames, Ankeny (Iowa)" },
  { code: "563 - Davenport, Bettendorf, Clinton (Iowa)" },
  { code: "641 - Mason City, Marshalltown, Ottumwa (Iowa)" },
  { code: "712 - Sioux City, Council Bluffs (Iowa)" },
  { code: "316 - Wichita (Kansas)" },
  { code: "620 - Hutchinson, Dodge City, Emporia (Kansas)" },
  { code: "785 - Topeka, Hays, Lawrence (Kansas)" },
  { code: "913 - Overland Park, Kansas City, Leavenworth (Kansas)" },
  { code: "270 - Bowling Green, Elizabethtown, Henderson (Kentucky)" },
  { code: "364 - Bowling Green, Elizabethtown, Henderson (Kentucky)" },
  { code: "502 - Louisville, Frankfort (Kentucky)" },
  { code: "606 - Ashland (Kentucky)" },
  { code: "859 - Lexington-Fayette, Covington, Florence (Kentucky)" },
  { code: "225 - Baton Rouge (Louisiana)" },
  { code: "318 - Shreveport, Alexandria, Bossier City (Louisiana)" },
  { code: "337 - Lafayette, Lake Charles, New Iberia (Louisiana)" },
  { code: "504 - New Orleans, Chalmette, Harvey (Louisiana)" },
  { code: "985 - Houma, Laplace, Slidell (Louisiana)" },
  { code: "207 - Portland, Auburn, Augusta (Maine)" },
  { code: "204 - Winnipeg (Manitoba)" },
  { code: "431 - Winnipeg (Manitoba)" },
  { code: "584 - Winnipeg (Manitoba)" },
  { code: "240 - Germantown, Aspen Hill, Bethesda (Maryland)" },
  { code: "301 - Germantown, Aspen Hill, Bethesda (Maryland)" },
  { code: "410 - Baltimore, Annapolis, Arbutus (Maryland)" },
  { code: "443 - Baltimore, Annapolis, Arbutus (Maryland)" },
  { code: "667 - Baltimore, Annapolis, Arbutus (Maryland)" },
  { code: "339 - Boston, Arlington, Braintree (Massachusetts)" },
  { code: "351 - Lowell, Beverly, Chelmsford (Massachusetts)" },
  { code: "413 - Springfield, Agawam, Chicopee (Massachusetts)" },
  { code: "508 - Worcester, Attleboro, Barnstable Town (Massachusetts)" },
  { code: "617 - Boston, Belmont, Brookline (Massachusetts)" },
  { code: "774 - Worcester, Attleboro, Barnstable Town (Massachusetts)" },
  { code: "781 - Boston, Arlington, Braintree (Massachusetts)" },
  { code: "857 - Boston, Belmont, Brookline (Massachusetts)" },
  { code: "978 - Lowell, Beverly, Chelmsford (Massachusetts)" },
  { code: "231 - Muskegon, Norton Shores, Shelby (Michigan)" },
  { code: "248 - Troy, Bloomfield, Farmington Hills (Michigan)" },
  { code: "269 - Kalamazoo, Battle Creek, Portage (Michigan)" },
  { code: "313 - Detroit, Allen Park, Dearborn (Michigan)" },
  { code: "517 - Lansing, Adrian, Clinton (Michigan)" },
  { code: "586 - Warren, Clinton, Eastpointe (Michigan)" },
  { code: "616 - Grand Rapids, Forest Hills, Holland (Michigan)" },
  { code: "734 - Ann Arbor, Canton, Garden City (Michigan)" },
  { code: "810 - Flint, Burton, Port Huron (Michigan)" },
  { code: "906 - Marquette (Michigan)" },
  { code: "947 - Troy, Bloomfield, Farmington Hills (Michigan)" },
  { code: "989 - Saginaw, Bay City, Harrison (Michigan)" },
  { code: "218 - Duluth, Andover, Moorhead (Minnesota)" },
  { code: "320 - St. Cloud (Minnesota)" },
  { code: "507 - Rochester, Austin, Faribault (Minnesota)" },
  { code: "612 - Minneapolis, Crystal, Golden Valley (Minnesota)" },
  { code: "651 - St. Paul, Apple Valley, Cottage Grove (Minnesota)" },
  { code: "763 - Brooklyn Park, Blaine, Brooklyn Center (Minnesota)" },
  { code: "952 - Bloomington, Burnsville, Chanhassen (Minnesota)" },
  { code: "228 - Gulfport, Biloxi, Pascagoula (Mississippi)" },
  { code: "601 - Jackson, Clinton, Hattiesburg (Mississippi)" },
  { code: "662 - Southaven, Clarksdale, Columbus (Mississippi)" },
  { code: "769 - Jackson, Clinton, Hattiesburg (Mississippi)" },
  { code: "314 - St. Louis, Affton, Ferguson (Missouri)" },
  { code: "417 - Springfield, Joplin (Missouri)" },
  { code: "557 - St. Louis (Missouri)" },
  { code: "573 - Columbia, Cape Girardeau, Jefferson City (Missouri)" },
  { code: "636 - O'Fallon, Ballwin, Chesterfield (Missouri)" },
  { code: "660 - Sedalia (Missouri)" },
  { code: "816 - Kansas City, Belton, Blue Springs (Missouri)" },
  { code: "406 - Billings, Bozeman, Butte-silver Bow (Montana)" },
  { code: "308 - Grand Island, Kearney, North Platte (Nebraska)" },
  { code: "402 - Omaha, Bellevue, Columbus (Nebraska)" },
  { code: "531 - Omaha, Bellevue, Columbus (Nebraska)" },
  { code: "702 - Las Vegas, Henderson, North Las Vegas (Nevada)" },
  { code: "725 - Las Vegas, Henderson, North Las Vegas (Nevada)" },
  { code: "775 - Reno, Carson City, Pahrump (Nevada)" },
  { code: "506 - Moncton (New Brunswick)" },
  { code: "603 - Manchester, Concord, Derry (New Hampshire)" },
  { code: "201 - Jersey City, Bayonne, Bergenfield (New Jersey)" },
  { code: "551 - Jersey City, Bayonne, Bergenfield (New Jersey)" },
  { code: "609 - Trenton, Atlantic City, Ewing (New Jersey)" },
  { code: "640 - Trenton (New Jersey)" },
  { code: "732 - Toms River, Brick, Carteret (New Jersey)" },
  { code: "848 - Toms River, Brick, Carteret (New Jersey)" },
  { code: "856 - Camden, Bridgeton, Cherry Hill (New Jersey)" },
  { code: "862 - Newark, Belleville, Bloomfield (New Jersey)" },
  { code: "908 - Elizabeth, Cranford, Hillside (New Jersey)" },
  { code: "973 - Newark, Belleville, Bloomfield (New Jersey)" },
  { code: "505 - Albuquerque, Farmington, Gallup (New Mexico)" },
  { code: "575 - Las Cruces, Alamogordo, Carlsbad (New Mexico)" },
  { code: "212 - New York, Manhattan, New York City (New York)" },
  { code: "315 - Syracuse, Auburn, Rome (New York)" },
  { code: "332 - New York, Manhattan, New York City (New York)" },
  { code: "347 - New York, Bronx, Brooklyn (New York)" },
  { code: "363 - Hempstead (New York)" },
  { code: "516 - Hempstead, Baldwin, East Meadow (New York)" },
  { code: "518 - Albany, Rotterdam, Saratoga Springs (New York)" },
  { code: "585 - Rochester, Brighton, Irondequoit (New York)" },
  { code: "607 - Binghamton, Elmira, Ithaca (New York)" },
  { code: "631 - Brentwood, Bay Shore, Centereach (New York)" },
  { code: "646 - New York, Manhattan, New York City (New York)" },
  { code: "680 - Syracuse, Auburn, Rome (New York)" },
  { code: "716 - Buffalo, Cheektowaga, Jamestown (New York)" },
  { code: "718 - New York, Bronx, Brooklyn (New York)" },
  { code: "838 - Albany, Rotterdam, Saratoga Springs (New York)" },
  { code: "845 - New City, Kingston, Middletown (New York)" },
  { code: "914 - Yonkers, Harrison, Mount Vernon (New York)" },
  { code: "917 - New York, Bronx, Brooklyn (New York)" },
  { code: "929 - New York, Bronx, Brooklyn (New York)" },
  { code: "934 - Brentwood, Bay Shore, Centereach (New York)" },
  { code: "709 - St. Johns (Newfoundland)" },
  { code: "252 - Greenville, Havelock, Kinston (North Carolina)" },
  { code: "336 - Greensboro, Asheboro, Burlington (North Carolina)" },
  { code: "472 - Fayetteville (North Carolina)" },
  { code: "704 - Charlotte, Concord, Gastonia (North Carolina)" },
  { code: "743 - Greensboro, Asheboro, Burlington (North Carolina)" },
  { code: "828 - Asheville, Hickory (North Carolina)" },
  { code: "910 - Fayetteville, Fort Bragg, Jacksonville (North Carolina)" },
  { code: "919 - Raleigh, Apex, Cary (North Carolina)" },
  { code: "980 - Charlotte, Concord, Gastonia (North Carolina)" },
  { code: "984 - Raleigh, Apex, Cary (North Carolina)" },
  { code: "701 - Fargo, Bismarck, Grand Forks (North Dakota)" },
  { code: "670 - Saipan (Northern Mariana Islands)" },
  { code: "867 - Whitehorse (Northwest Territories)" },
  { code: "782 - Halifax (Nova Scotia)" },
  { code: "902 - Halifax (Nova Scotia)" },
  { code: "867 - Whitehorse (Nunavut)" },
  { code: "216 - Cleveland, Brook Park, Cleveland Heights (Ohio)" },
  { code: "220 - Newark, Athens, Chillicothe (Ohio)" },
  { code: "234 - Akron, Alliance, Austintown (Ohio)" },
  { code: "326 - Dayton (Ohio)" },
  { code: "330 - Akron, Alliance, Austintown (Ohio)" },
  { code: "380 - Columbus, Dublin, Gahanna (Ohio)" },
  { code: "419 - Toledo, Ashland, Bowling Green (Ohio)" },
  { code: "440 - Parma, Ashtabula, Eastlake (Ohio)" },
  { code: "513 - Cincinnati, Fairfield, Hamilton (Ohio)" },
  { code: "567 - Toledo, Ashland, Bowling Green (Ohio)" },
  { code: "614 - Columbus, Dublin, Gahanna (Ohio)" },
  { code: "740 - Newark, Athens, Chillicothe (Ohio)" },
  { code: "937 - Dayton, Beavercreek, Centerville (Ohio)" },
  { code: "405 - Oklahoma City, Bethany, Del City (Oklahoma)" },
  { code: "539 - Tulsa, Bartlesville, Broken Arrow (Oklahoma)" },
  { code: "572 - Oklahoma City (Oklahoma)" },
  { code: "580 - Lawton, Altus, Ardmore (Oklahoma)" },
  { code: "918 - Tulsa, Bartlesville, Broken Arrow (Oklahoma)" },
  { code: "226 - London (Ontario)" },
  { code: "249 - Sudbury (Ontario)" },
  { code: "289 - Hamilton (Ontario)" },
  { code: "343 - Ottawa (Ontario)" },
  { code: "365 - Hamilton (Ontario)" },
  { code: "416 - Toronto (Ontario)" },
  { code: "437 - Toronto (Ontario)" },
  { code: "519 - London (Ontario)" },
  { code: "548 - London (Ontario)" },
  { code: "613 - Ottawa (Ontario)" },
  { code: "647 - Toronto (Ontario)" },
  { code: "683 - Sudbury (Ontario)" },
  { code: "705 - Sudbury (Ontario)" },
  { code: "742 - Hamilton (Ontario)" },
  { code: "753 - Ottawa (Ontario)" },
  { code: "807 - Kenora (Ontario)" },
  { code: "905 - Hamilton (Ontario)" },
  { code: "458 - Eugene, Albany, Bend (Oregon)" },
  { code: "503 - Portland, Aloha, Beaverton (Oregon)" },
  { code: "541 - Eugene, Albany, Bend (Oregon)" },
  { code: "971 - Portland, Aloha, Beaverton (Oregon)" },
  { code: "215 - Philadelphia, Levittown (Pennsylvania)" },
  { code: "223 - Lancaster, Harrisburg, Lebanon (Pennsylvania)" },
  { code: "267 - Philadelphia, Levittown (Pennsylvania)" },
  { code: "272 - Scranton, Back Mountain, Hazleton (Pennsylvania)" },
  { code: "412 - Pittsburgh, Bethel Park, Mccandless (Pennsylvania)" },
  { code: "445 - Philadelphia, Levittown (Pennsylvania)" },
  { code: "484 - Allentown, Bethlehem, Chester (Pennsylvania)" },
  { code: "570 - Scranton, Back Mountain, Hazleton (Pennsylvania)" },
  { code: "582 - Erie (Pennsylvania)" },
  { code: "610 - Allentown, Bethlehem, Chester (Pennsylvania)" },
  { code: "717 - Lancaster, Harrisburg, Lebanon (Pennsylvania)" },
  { code: "724 - New Castle, Mccandless, Monroeville (Pennsylvania)" },
  { code: "814 - Erie, Altoona, Johnstown (Pennsylvania)" },
  { code: "835 - Allentown (Pennsylvania)" },
  { code: "878 - Pittsburgh, Bethel Park, Mccandless (Pennsylvania)" },
  { code: "782 - Halifax (Prince Edward Island)" },
  { code: "902 - Halifax (Prince Edward Island)" },
  { code: "787 - San Juan (Puerto Rico)" },
  { code: "939 - San Juan (Puerto Rico)" },
  { code: "263 - Montreal (Quebec)" },
  { code: "354 - Granby (Quebec)" },
  { code: "367 - Quebec (Quebec)" },
  { code: "418 - Quebec (Quebec)" },
  { code: "438 - Montreal (Quebec)" },
  { code: "450 - Granby (Quebec)" },
  { code: "468 - Sherbrooke (Quebec)" },
  { code: "514 - Montreal (Quebec)" },
  { code: "579 - Granby (Quebec)" },
  { code: "581 - Quebec (Quebec)" },
  { code: "819 - Sherbrooke (Quebec)" },
  { code: "873 - Sherbrooke (Quebec)" },
  { code: "401 - Providence, Bristol, Cranston (Rhode Island)" },
  { code: "306 - Saskatoon (Saskatchewan)" },
  { code: "474 - Saskatoon (Saskatchewan)" },
  { code: "639 - Saskatoon (Saskatchewan)" },
  { code: "803 - Columbia, Aiken, Rock Hill (South Carolina)" },
  { code: "839 - Columbia (South Carolina)" },
  { code: "843 - Charleston, Florence, Goose Creek (South Carolina)" },
  { code: "854 - Charleston, Florence, Goose Creek (South Carolina)" },
  { code: "864 - Greenville, Anderson, Greenwood (South Carolina)" },
  { code: "605 - Sioux Falls, Aberdeen, Pierre (South Dakota)" },
  { code: "423 - Chattanooga, Bristol, Cleveland (Tennessee)" },
  { code: "615 - Nashville, Brentwood, Franklin (Tennessee)" },
  { code: "629 - Nashville, Brentwood, Franklin (Tennessee)" },
  { code: "731 - Jackson (Tennessee)" },
  { code: "865 - Knoxville, Maryville, Oak Ridge (Tennessee)" },
  { code: "901 - Memphis, Bartlett, Collierville (Tennessee)" },
  { code: "931 - Clarksville, Columbia, Cookeville (Tennessee)" },
  { code: "210 - San Antonio (Texas)" },
  { code: "214 - Dallas, Allen, Arlington (Texas)" },
  { code: "254 - Killeen, Copperas Cove, Fort Hood (Texas)" },
  { code: "281 - Houston, Alvin, Atascocita (Texas)" },
  { code: "325 - Abilene, San Angelo (Texas)" },
  { code: "346 - Houston, Alvin, Atascocita (Texas)" },
  { code: "361 - Corpus Christi, Kingsville, Victoria (Texas)" },
  { code: "409 - Beaumont, Galveston, Port Arthur (Texas)" },
  { code: "430 - Tyler (Texas)" },
  { code: "432 - Midland, Big Spring, Odessa (Texas)" },
  { code: "469 - Dallas, Allen, Carrollton (Texas)" },
  { code: "512 - Austin, Cedar Park, Georgetown (Texas)" },
  { code: "682 - Fort Worth, Arlington, Bedford (Texas)" },
  { code: "713 - Houston, Alvin, Atascocita (Texas)" },
  { code: "726 - San Antonio (Texas)" },
  { code: "737 - Austin, Cedar Park, Georgetown (Texas)" },
  { code: "806 - Lubbock, Amarillo, Plainview (Texas)" },
  { code: "817 - Fort Worth, Arlington, Bedford (Texas)" },
  { code: "830 - New Braunfels, Del Rio, Eagle Pass (Texas)" },
  { code: "832 - Houston, Alvin, Atascocita (Texas)" },
  { code: "903 - Tyler, Corsicana, Denison (Texas)" },
  { code: "915 - El Paso, Socorro (Texas)" },
  { code: "936 - Conroe, Huntsville, Lufkin (Texas)" },
  { code: "940 - Denton, Lewisville, Wichita Falls (Texas)" },
  { code: "945 - Dallas (Texas)" },
  { code: "956 - Laredo, Brownsville, Edinburg (Texas)" },
  { code: "972 - Dallas, Allen, Carrollton (Texas)" },
  { code: "979 - College Station, Bryan, Lake Jackson (Texas)" },
  { code: "385 - Salt Lake City, American Fork, Bountiful (Utah)" },
  { code: "435 - St. George, Cedar City, Logan (Utah)" },
  { code: "801 - Salt Lake City, American Fork, Bountiful (Utah)" },
  { code: "802 - Burlington, Montpelier (Vermont)" },
  { code: "340 - St. Croix, Charlotte Amalie (Virgin Islands)" },
  { code: "276 - Bristol, Richmond (Virginia)" },
  { code: "434 - Lynchburg, Charlottesville, Danville (Virginia)" },
  { code: "540 - Roanoke, Blacksburg, Cave Spring (Virginia)" },
  { code: "571 - Arlington, Alexandria, Annandale (Virginia)" },
  { code: "703 - Arlington, Alexandria, Annandale (Virginia)" },
  { code: "757 - Virginia Beach, Chesapeake, Hampton (Virginia)" },
  { code: "804 - Richmond, Hopewell, Mechanicsville (Virginia)" },
  { code: "826 - Roanoke (Virginia)" },
  { code: "948 - Virginia Beach (Virginia)" },
  { code: "206 - Seattle, Bainbridge Island, Burien (Washington)" },
  { code: "253 - Tacoma, Auburn, East Hill-meridian (Washington)" },
  { code: "360 - Vancouver, Bellingham, Bremerton (Washington)" },
  { code: "425 - Bellevue, Bothell, Cascade-fairwood (Washington)" },
  { code: "509 - Spokane, Kennewick, Opportunity (Washington)" },
  { code: "564 - Vancouver, Bellingham, Bremerton (Washington)" },
  { code: "202 - Washington (Washington, DC)" },
  { code: "771 - Washington (Washington, DC)" },
  { code: "304 - Charleston, Huntington, Morgantown (West Virginia)" },
  { code: "681 - Charleston, Huntington, Morgantown (West Virginia)" },
  { code: "262 - Kenosha, Brookfield, Caledonia (Wisconsin)" },
  { code: "414 - Milwaukee, Franklin, Greenfield (Wisconsin)" },
  { code: "534 - Eau Claire (Wisconsin)" },
  { code: "608 - Madison, Beloit, Fitchburg (Wisconsin)" },
  { code: "715 - Eau Claire, Stevens Point, Superior (Wisconsin)" },
  { code: "920 - Green Bay, Appleton, De Pere (Wisconsin)" },
  { code: "307 - Cheyenne, Casper, Gillette (Wyoming)" },
  { code: "867 - Whitehorse (Yukon)" },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function AreaCodeSelector() {
  const { user } = useUser();
  const [query, setQuery] = useState("");
  const router = useRouter();

  const filteredPostCodes =
    query === ""
      ? postCodes
      : postCodes.filter((postCode) => {
          return postCode.code.toLowerCase().includes(query.toLowerCase());
        });

  const handlePostCodeChange = async (postCode) => {
    const selectedPostCodes = user?.unsafeMetadata?.selectedPostCodes || [];

    const updatedSelectedPostCodes = (selectedPostCodes as any[]).some(
      (selected) => selected.code === postCode.code
    )
      ? (selectedPostCodes as any[]).filter(
          (selected) => selected.code !== postCode.code
        )
      : [...selectedPostCodes, postCode];

    try {
      await user.update({
        unsafeMetadata: { selectedPostCodes: updatedSelectedPostCodes },
      });
      router.refresh();
    } catch (err) {
      console.error("error", err);
    }
  };

  const selectedPostCodes = user?.unsafeMetadata?.selectedPostCodes || [];

  return (
    <div className="mt-4">
      <Combobox as="div" value={null} onChange={handlePostCodeChange}>
        <Combobox.Label className="text-sm font-semibold text-slate-500 hover:text-slate-600"></Combobox.Label>
        <div className="relative mt-2">
          <Combobox.Input
            className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-200 focus:ring-1 focus:ring-inset focus:ring-gray-200 sm:text-sm sm:leading-6"
            onChange={(event) => setQuery(event.target.value)}
            displayValue={(postCode) => postCode?.code}
            placeholder="Search area code"
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Combobox.Button>

          {filteredPostCodes.length > 0 && (
            <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 ring-gray-900 ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredPostCodes.map((postCode) => (
                <Combobox.Option
                  key={postCode.code}
                  value={postCode}
                  className={({ active }) =>
                    classNames(
                      "relative cursor-default select-none py-2 pl-3 pr-9",
                      active ? "bg-gray-100 text-gray-900" : "text-gray-900"
                    )
                  }
                >
                  {({ active, selected }) => (
                    <>
                      <span
                        className={classNames(
                          "block truncate",
                          selected && "font-semibold"
                        )}
                      >
                        {postCode.code}
                      </span>

                      {selected && (
                        <span
                          className={classNames(
                            "absolute inset-y-0 right-0 flex items-center pr-4",
                            active ? "text-white" : "text-gray-200"
                          )}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      )}
                    </>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          )}
        </div>
      </Combobox>

      <div className="mt-2 mb-4">
        {selectedPostCodes.map((postCode) => (
          <span
            key={postCode.code}
            className="inline-flex items-center gap-x-1.5 rounded px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200 mr-2"
          >
            <svg
              className="h-1.5 w-1.5 fill-green-500"
              viewBox="0 0 6 6"
              aria-hidden="true"
            >
              <circle cx={3} cy={3} r={3} />
            </svg>
            {postCode.code}
          </span>
        ))}
      </div>
    </div>
  );
}
