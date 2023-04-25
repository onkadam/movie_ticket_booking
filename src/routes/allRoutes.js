import Home from "../pages/Home"
import MovieCheckout from "../pages/MovieCheckout"
import MovieDetails from "../pages/MovieDetails"
import MovieList from "../pages/MovieList"
import MovieSeatPlan from "../pages/MovieSeatPlan"
import MovieTicketPlan from "../pages/MovieTicketPlan"
import Popcorn from "../pages/Popcorn"


const allPublicRoutes = [
    {
        path:"/",
        element:<Home />
    },
    {
        path:"/movie-list",
        element:<MovieList/>
    },
    {
        path:"/movie-details",
        element:<MovieDetails/>
    },
    {
        path:"/movie-seat-plan",
        element:<MovieSeatPlan/>
    },
    {
        path:"/movie-ticket-plan",
        element:<MovieTicketPlan/>
    },
    {
        path:"/movie-checkout",
        element:<MovieCheckout/>
    },
    {
        path:"/popcorn",
        element:<Popcorn/>
    },
    
]

const allPrivateRoutes = [
    {}
]



export {allPublicRoutes, allPrivateRoutes}