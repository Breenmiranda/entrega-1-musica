type ContainerProps = {
    children: React.ReactNode;
};

const Container = ({children}: ContainerProps) => {
    return (
        <div 
            style={{
                maxWidth:"1200px",
                margin:"0 auto",
                padding:"20px"
            }}
        >
            {children}
        </div>
    )
}

export default Container;