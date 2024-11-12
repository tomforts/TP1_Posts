import Model from './model.js';

<<<<<<< HEAD:models/post.js
export default class Post extends Model {
=======
export default class News extends Model {
>>>>>>> Luciano:models/news.js
    constructor() {
        super(true /* secured Id */);

        this.addField('Id', 'string');
        this.addField('Title', 'string');
        this.addField('Text', 'string');
        this.addField('Category', 'string');
        this.addField('Image', 'asset');
        this.addField('Creation', 'integer');
              
        this.setKey("Id");
    }
}