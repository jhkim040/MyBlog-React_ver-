package com.mog.myblog.Controller;

import com.mog.myblog.Entitiy.Board;
import com.mog.myblog.Service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class BoardController {
    @Autowired
    private BoardService boardService;

    @GetMapping("/board/view/{id}")
    public Board boardView(@PathVariable Integer id) {
        return boardService.boardView(id);
    }

    @GetMapping("/board/list")
    public List<Board> boardList(String searchKeyword) {
        System.out.println(searchKeyword);
        List<Board> list = null;
        if(searchKeyword == null) {
            list = boardService.boardList();
        } else {
            list = boardService.boardSearchList(searchKeyword);
        }
        return list;
    }
    @PostMapping("/board/insert")
    public void boardInsert(@RequestBody Board board) {
        System.out.println(board);
        Board boardTemp = new Board();
        boardTemp.setCategory(board.getCategory());
        boardTemp.setTitle(board.getTitle());
        boardTemp.setContent(board.getContent());
        boardService.write(boardTemp);
    }
    @GetMapping("/board/delete")
    public void boardDelete(Integer id) {
    boardService.boardDelete(id);
    }

    @PostMapping("/board/update")
    public void boardUpdate(@RequestBody Board board) {

        Board boardTemp = boardService.boardView(board.getId());
        boardTemp.setTitle(board.getTitle());
        boardTemp.setCategory(board.getCategory());
        boardTemp.setContent(board.getContent());
        boardService.write(boardTemp);
    }
}
