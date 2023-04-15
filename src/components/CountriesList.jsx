import { Link } from 'react-router-dom';

const CountriesList = ({
  countries,
  showCountryDetails,
  setShowCountryDetails,
}) => {
  return (
    <div className="container">
      <div className="row">
        <div
          className={showCountryDetails ? '' : 'col-5'}
          style={{ maxHeight: '90vh', overflow: 'scroll' }}
        >
          {countries.map((country) => {
            return (
              <div className="list-group">
                <Link
                  onClick={() => setShowCountryDetails(true)}
                  className="list-group-item  list-group-item-action"
                  to={`/${country.alpha3Code}`}
                >
                  <img
                    src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                    alt="country"
                  />
                  <p>{country.name.official}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CountriesList;
