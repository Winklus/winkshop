import { Helmet } from 'react-helmet-async';


const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
    <link rel="stylesheet" href="../assets/styles/bootstrap.custom.css" />
    <link rel="stylesheet" href="../assets/styles/index.css" />
      <title>{title}</title>
      <Meta name='description' content={description} />
      <Meta name='keywords' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome To Winkshop',
  description: 'We sell the best products for afforable prices',
  keywords: 'electronics, buy electronics, cheap electroincs, phone, phones, buy phones',
};

export default Meta;