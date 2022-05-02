import React, {useEffect, useMemo, useRef, useState} from "react";
import '../styles/App.css';
import Counter from "../components/counter";
import RelatedComponent from "../components/relatedComponent";
import PostItem from "../components/PostItem";
import PostList from "../components/PostList";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import PostForm from "../components/PostForm";
import MySelect from "../components/UI/select/MySelect";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/Modal/MyModal";
import {usePosts} from "../hooks/usePosts";
import axios from "axios";
import PostService from "../API/PostService";
import MyLoader from "../components/UI/loader/MyLoader";
import {useFetching} from "../hooks/useFetching";
import {getPageCount, getPagesArray} from "../utils/pages";
import MyPagination from "../components/UI/pagination/MyPagination";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);
    const lastElement = useRef()


    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data]);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));
    });

    useEffect(() => {

    }, [])

    useEffect(() => {
        fetchPosts(limit, page)  ;
    }, [page]);


    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    const removePost = (postToBeDeleted) => {
        setPosts(posts.filter(post => post.id !== postToBeDeleted.id))
    }

    const changePage = (page) => {
        setPage(page);
    }

    return (
        <div className="App">



            <MyButton style={{marginTop: '35px'}} onClick={() => setModal(true)}>
                Создать Пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {postError &&
                <h1>Произошла ошибка {postError} :(</h1>
            }
            <PostList remove={removePost} posts={sortedAndSearchPosts} title="Список Постов "/>
            <div ref={lastElement} style={{height:"20px", background:"red"}}/>
            {isPostsLoading &&
                 <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><MyLoader/></div>
            }
            <MyPagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />
        </div>
    );
}

export default Posts;