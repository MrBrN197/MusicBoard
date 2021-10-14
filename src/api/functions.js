import APIFactory from './factory.js';
import credentials from './credentials.js';

import data from './data.js';

const apiPlaceholder = APIFactory({ credentials, fetch });

// NOTE: THIS are placeholders for the real API

apiPlaceholder.getNewReleases = async () => data.items;

export default apiPlaceholder;