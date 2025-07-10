import { UserContext, HobbyContext } from '../../App';

const ContextC = () => {
  return (
    <UserContext.Consumer>
      {(user) => (
        <HobbyContext.Consumer>
          {(hobby) => (
            <p>{user.name}（{user.age}歳）: 趣味は {hobby}</p>
          )}
        </HobbyContext.Consumer>
      )}
    </UserContext.Consumer>
  );
};

export default ContextC;



