import { Navigate, Outlet, useParams } from "react-router-dom"
import { usePostContext } from "../../contexts/postContext";
import { useAuthContext } from "../../contexts/AuthContext";

export const IsOwner = (
    {children}
) => {
    const { postId } = useParams();
    const { getPost } = usePostContext();
    const { userId } = useAuthContext();

    const currentPost = getPost(postId);

    if(currentPost && currentPost._ownerId !== userId) {
        return <Navigate to={`/catalog/${postId}`} replace />
    }
        return children ? children : <Outlet/>
    }
