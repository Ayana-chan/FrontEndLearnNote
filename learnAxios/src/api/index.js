import people from './people'
import books from './books'

export default {
  // people,
  // books,
  install: (app) => {
    app.config.globalProperties['$api'] = {
      people,
      books,
    };
  },
};


