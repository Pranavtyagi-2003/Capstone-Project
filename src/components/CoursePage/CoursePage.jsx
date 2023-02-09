import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { getCourseLectures } from '../../redux/Actions/course';
import Loader from '../Layout/Loader/Loader';

function CoursePage({ user }) {
  const [lectureNumber, setlectureNumber] = useState(0);

  const { lectures, loading } = useSelector(state => state.course);

  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getCourseLectures(params.id));
  }, [dispatch, params.id]);

  if (
    user.role !== 'admin' &&
    (user.subscription === undefined || user.subscription.status !== 'active')
  ) {
    return <Navigate to={'/subscribe'} />;
  }

  return loading ? (
    <Loader />
  ) : (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
     {
      lectures && lectures.length>0?(
        <>
         <Box>
        <video
          width={'100%'}
          muted
          autoPlay
          controls
          src={lectures[lectureNumber].video.url}
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
        ></video>
        <Heading
          children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}
          m={'4'}
        />
        <Heading children="Description" m={'4'} />
        <Text m={'4'} children={lectures[lectureNumber].description} />
      </Box>
      <VStack>
        {lectures.map((element, index) => (
          <button
            key={element._id}
            onClick={() => setlectureNumber(index)}
            style={{
              width: '100%',
              padding: '1rem',
              textAlign: 'center',
              margin: 0,
              borderBottom: '1px solid rgba(0,0,0,0,2)',
            }}
          >
            <Text noOfLines={1}>
              #{index + 1} {element.title}
            </Text>
          </button>
        ))}
      </VStack>
        </>
      ):
      <Heading children="No Lectures"/>
     }
    </Grid>
  );
}

export default CoursePage;
