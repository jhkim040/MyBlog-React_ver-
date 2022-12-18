package com.mog.myblog.Service;

import com.mog.myblog.Entitiy.Board;
import com.mog.myblog.Repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardService {
    @Autowired
    private BoardRepository boardRepository;

    public List<Board> boardList() {
        return boardRepository.findAll();
    }

    public void write(Board board) {
        boardRepository.save(board);
    }
}
