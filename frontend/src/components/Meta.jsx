import { Helmet } from 'react-helmet-async';


const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    <link rel="stylesheet" href="../assets/styles/bootstrap.custom.css" />
    <link rel="stylesheet" href="../assets/styles/index.css" />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome To Winkshop',
  description: 'We sell the best products for afforable prices',
  keywords: 'electronics, buy electronics, cheap electroincs, phone, phones, buy phones',
};

export default Meta;