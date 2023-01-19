import axios from 'axios';
import { useState, useEffect } from 'react';

const BASE_URL = 'https://api.themoviedb.org/';
const KEY = '7b0e471f76e5da9e6415f6c271770eca';

const Home = () => {
    const [filmHits, setFilmHits] = useState([]);
    const [film, setFilm] = useState([]);
    

    useEffect(() => {
        const fetchData = async() = {
      
        }
    },[])
    
  return (
    <ul>
      <li></li>
    </ul>
  );
};

export default Home;

// export const App = () => {
//   const [image, setImage] = useState([]);
//   const [search, setSearch] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [page, setPage] = useState(1);
//   const [imageHits, setImageHits] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [url, setUrl] = useState('');
//   const [alt, setAlt] = useState('');

//   const handleSearch = search => {
//     setSearch(search);
//     setPage(1);
//     setImage([]);
//   };

//   const loadMore = () => {
//     setPage(prev => prev + 1);
//   };

//   useEffect(() => {
//     if (!search) {
//       return;
//     }

//     const fetchData = async () => {
//       setIsLoading(true);
//       try {
//         const { data } = await axios.get(
//           `${BASE_URL}q=${search}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
//         );

//         setImage(prev => [...prev, ...data.hits]);
//         setImageHits(data);

//         if (page === 1) {
//           toast.success(`We found ${data.total} images`);
//         }
//       } catch (error) {
//         setImage([]);
//         toast.error('Cannot process your request');
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchData();
//   }, [search, page]);

//   const toggleModal = () => {
//     setShowModal(pS => !pS);
//   };

//   const handleModal = (url, alt) => {
//     toggleModal();

//     setUrl(url);
//     setAlt(alt);
//   };

//   return (
//     <Container>
//       <SearchBar onSubmit={handleSearch} />

//       {
//         <ImageGallery>
//           {<ImageGalleryItem image={image} onhandleModal={handleModal} />}
//         </ImageGallery>
//       }
//       {isLoading && <Loader />}
//       {<Toast />}
//       {showModal && (
//         <Modal onClose={toggleModal}>
//           <ModalInner url={url} alt={alt} />
//         </Modal>
//       )}
//       {image.length === 0 || imageHits.totalHits === image.length || (
//         <Button onClick={loadMore} />
//       )}
//     </Container>
//   );
// };
