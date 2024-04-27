    import CommentModal from "../../../database/models/CommentsModel";
    const postCommentFx = async(commentData:{
    firstname: string,
    lastname: string,
    email: string,
    comment: string,
    blogId: string
    }) => {
        const newCommentSave = new CommentModal(commentData)

        await newCommentSave.save()

        return newCommentSave
    };

    export default {
    postCommentFx,
    };
