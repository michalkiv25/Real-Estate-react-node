import {Card,Button} from 'react-bootstrap';

function CardComp ({card,handleClick,handleClick1}) {
 return  card && <Card style={{ width: '27rem',height : '37rem', display:'inline-block' , padding:5, margin:10 }}>
                      <Card.Img variant="top" style={{width:280, height:170}} src={card.bizImage} />
                        <Card.Body>
                        <Card.Title >Description Home:</Card.Title>
                          <Card.Text>{card.bizDescription}</Card.Text>
                          <Card.Title>Address:</Card.Title>
                          <Card.Text>
                            {card.bizAddress}
                          </Card.Text>
                          <Card.Title>Price:</Card.Title>
                          <Card.Text>
                            {card.bizPrice}
                          </Card.Text>
                          <Card.Title>Contact Information:</Card.Title>
                          <Card.Text>
                            {card.bizPhone} - {card.bizName}
                          </Card.Text>

                          <Button variant="secondary" id="submitCardDelete" onClick={(e)=>{
                            e.preventDefault();
                            handleClick(card._id);
                          }} >Remove this card</Button>

                          <Button variant="secondary" id="submitCardDelete" onClick={(e)=>{
                            e.preventDefault();
                            handleClick1(card._id);
                          }} >Editing a card</Button>
                          </Card.Body>
                          </Card>||<></>
                          }
                          
export default CardComp;