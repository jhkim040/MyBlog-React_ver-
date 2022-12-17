package com.mog.myblog.Controller;

import com.mog.myblog.Entitiy.Board;
import com.mog.myblog.Service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class BoardController {
    @Autowired
    private BoardService boardService;

    @GetMapping("/board/list")
    public List<Board> boardList() {
        System.out.println("boardList 연결");
        return boardService.boardList();
    }
}
