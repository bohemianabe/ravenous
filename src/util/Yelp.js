const apiKey = '8yPA9302qCNDMO1xjCTqlTYkGe4UtnewA6oIEHMNL5rYsC_ijGvS0hgAJAp7rn7pz9049DM3Mvbz7RahqPjYy1_5vSJmj3uHOuCZs1ktsk-E7ZFt9M7Y6OtrgzTIXnYx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
    });
  }
};
export default Yelp;
