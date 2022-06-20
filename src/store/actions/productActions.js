export const createProductAction = (product) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('products').add({
            ...product,
            authorFirstName: profile.firstName || '',
            authorLastName: profile.lastName|| '',
            authorId: authorId || '',
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_PRODUCT', product});
        }).catch((err) => {
            dispatch({type: 'CREATE_PRODUCT_ERROR', err})
        });
    }
};



export const updateQty = (productId,product) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        let docRef = firestore.collection("products").doc(productId);
        docRef.get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
        
        
        // firestore.collection('products').doc(productId).update({
        //     Qty:Qty- product.qty
        // }).then(() => {
        //     console.log('Product qty edited');
        //     dispatch({type: 'EDIT_SUCCESS'});
        // }).catch(err => {
        //     console.log('Product qty edit error');
        //     dispatch({type: 'EDIT_ERROR', err});
        // });
    }
}
