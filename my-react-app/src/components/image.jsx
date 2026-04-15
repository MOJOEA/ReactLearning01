import PropTypes from 'prop-types';

export default function Image({ src, alt }) {
  return (
    <div>
      <img src={src} alt={alt} />
    </div>
  );
}

Image.prototype = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};